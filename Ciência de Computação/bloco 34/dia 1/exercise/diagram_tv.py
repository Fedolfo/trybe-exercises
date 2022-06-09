class Tv:
    def __init__(self, channel, volume, size, on):
        self.channel = channel
        self.volume = volume
        self.size = size
        self.on = on

    def __str__(self):
        return f"Channel: {self.channel}, Volume: {self.volume}, Size: {self.size}, On: {self.on}"

    def turn_up_volume(self):
        if self.volume < 100:
            self.volume += 1

    def turn_down_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def turn_on_off(self):
        if self.on:
            self.on = False
        else:
            self.on = True

    def set_channel(self, channel):
        if self.on and 0 < channel < 120:
            self.channel = channel
        else:
            raise ValueError(
                """
              Channel must be between 0 and 120
              and TV must be on
              """
            )


tv = Tv(1, 2, 3, False)
tv.set_channel(6)
print(tv)
