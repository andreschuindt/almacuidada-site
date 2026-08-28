from PIL import Image, ImageDraw, ImageFont, ImageOps
from pathlib import Path

W, H = 1200, 630
BG = "#F6EDDF"
PURPLE = "#7D159F"
PURPLE_DARK = "#2D173B"
PURPLE_SOFT = "#A65AAF"
GOLD = "#B5A86A"
TEXT = "#30273A"

ROOT = Path(__file__).resolve().parents[1]
hero_path = ROOT / "assets" / "hero-meditacao.jpg"
out_path = ROOT / "assets" / "og-alma-cuidada-comunidade-2026.jpg"

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# Decorative rings
for pad, color, width in [(0, "#E8D6E9", 2), (24, "#E7D9BD", 2)]:
    draw.arc((-160-pad, -120-pad, 420+pad, 410+pad), 205, 355, fill=color, width=width)
    draw.arc((760-pad, -170-pad, 1400+pad, 430+pad), 160, 330, fill=color, width=width)
    draw.arc((850-pad, 320-pad, 1420+pad, 900+pad), 180, 305, fill=color, width=width)

def font(path_candidates, size):
    for p in path_candidates:
        if Path(p).exists():
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

serif_paths = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSerif-Regular.ttf",
]
serif_bold_paths = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSerif-Bold.ttf",
]
sans_paths = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
]
sans_bold_paths = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
]

brand_font = font(serif_paths, 43)
headline_font = font(serif_paths, 55)
support_font = font(sans_paths, 23)
support_bold = font(sans_bold_paths, 23)
footer_font = font(sans_bold_paths, 19)

# Lotus mark
cx, cy = 82, 118
draw.ellipse((cx-11, cy-28, cx+11, cy+22), outline=PURPLE, width=3)
draw.ellipse((cx-31, cy-15, cx+1, cy+24), outline=PURPLE, width=3)
draw.ellipse((cx-1, cy-15, cx+31, cy+24), outline=PURPLE, width=3)
draw.arc((cx-39, cy-4, cx+3, cy+33), 15, 165, fill=PURPLE, width=3)
draw.arc((cx-3, cy-4, cx+39, cy+33), 15, 165, fill=PURPLE, width=3)

draw.text((128, 83), "Alma Cuidada", font=brand_font, fill=PURPLE)

# Headline
x = 70
y = 190
lines = [
    ("Um espaço seguro", PURPLE_DARK),
    ("para nutrir, acolher", PURPLE),
    ("e expandir a sua alma.", PURPLE_DARK),
]
for text, color in lines:
    draw.text((x, y), text, font=headline_font, fill=color)
    y += 67

# Divider
draw.line((72, 406, 375, 406), fill=GOLD, width=2)
draw.ellipse((380, 402, 388, 410), fill=GOLD)

# Supporting copy
draw.text((72, 432), "Livroterapia, cuidado emocional e", font=support_font, fill=TEXT)
prefix = "uma "
highlight = "comunidade acolhedora"
suffix = " em um só lugar."
draw.text((72, 468), prefix, font=support_font, fill=TEXT)
px = 72 + draw.textlength(prefix, font=support_font)
draw.text((px, 468), highlight, font=support_bold, fill=PURPLE)
px += draw.textlength(highlight, font=support_bold)
draw.text((px, 468), suffix, font=support_font, fill=TEXT)

# Footer pill
draw.rounded_rectangle((0, 545, 455, 630), radius=42, fill=PURPLE)
draw.ellipse((70, 568, 106, 604), outline="white", width=2)
draw.arc((78, 570, 98, 602), 90, 270, fill="white", width=2)
draw.arc((78, 570, 98, 602), 270, 90, fill="white", width=2)
draw.line((72, 586, 104, 586), fill="white", width=2)
draw.text((124, 568), "almacuidada.vercel.app", font=footer_font, fill="white")

# Right photo panel
photo = Image.open(hero_path).convert("RGB")
photo = ImageOps.fit(photo, (500, 540), method=Image.Resampling.LANCZOS, centering=(0.52, 0.50))
mask = Image.new("L", (500, 540), 0)
md = ImageDraw.Draw(mask)
md.rounded_rectangle((0, 0, 499, 539), radius=52, fill=255)
img.paste(photo, (665, 45), mask)

# Rings over photo
overlay = Image.new("RGBA", (W, H), (0,0,0,0))
od = ImageDraw.Draw(overlay)
od.ellipse((705, 85, 1125, 520), outline=(125,21,159,140), width=8)
od.arc((730, 110, 1090, 505), 250, 80, fill=(125,21,159,180), width=10)
img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
draw = ImageDraw.Draw(img)

# Bottom-right badge
draw.ellipse((1038, 470, 1127, 559), fill=PURPLE, outline=GOLD, width=2)
bcx, bcy = 1082, 515
draw.ellipse((bcx-7, bcy-20, bcx+7, bcy+15), outline=GOLD, width=2)
draw.ellipse((bcx-23, bcy-10, bcx, bcy+18), outline=GOLD, width=2)
draw.ellipse((bcx, bcy-10, bcx+23, bcy+18), outline=GOLD, width=2)

out_path.parent.mkdir(parents=True, exist_ok=True)
img.save(out_path, "JPEG", quality=92, optimize=True, progressive=True)
print(out_path)
