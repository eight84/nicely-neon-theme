from dataclasses import dataclass


@dataclass(frozen=True)
class Palette:
    name: str
    colors: tuple[str, ...]


def create_palette(name: str, *colors: str) -> Palette:
    return Palette(name=name, colors=colors)


nicely_neon = create_palette(
    "Nicely Neon", "pink", "cyan", "green"
)
