let messages = [
    "Thou shalt have no other gods before Me.",
    "Thou shalt not make idols.",
    "Thou shalt not take the name of the LORD thy God in vain.",
    "Remember the Sabbath day, to keep it holy.",
    "Honor thy father and thy mother.",
    "Thou shalt not murder.",
    "Thou shalt not commit adultery.",
    "Thou shalt not steal.",
    "Thou shalt not bear false witness against thy neighbor.",
    "Thou shalt not covet thy neighbour’s wife, thou shalt not covet thy neighbour’s house ."
]

export function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}