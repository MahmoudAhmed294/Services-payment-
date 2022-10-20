import { Box } from '@mantine/core'
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import React, { useState } from 'react'

type Props = {}

const Emoji = (props: Props) => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>("");
    const [showEmoji, setShowEmoji] = useState<boolean>(false);
  
    const SelectEmoji = (emojiData: EmojiClickData, event: MouseEvent) => {
      setSelectedEmoji(emojiData.emoji);
    };
  
  return (
                <Box sx={{ width: "100%" , position:"absolute" }}>
          <EmojiPicker
            width={"100%"}
            height={"100%"}
            theme={Theme.DARK}
            searchDisabled={true}
            skinTonesDisabled={true}
            lazyLoadEmojis={true}
            onEmojiClick={SelectEmoji}
          />

    </Box>
  )
}

export default Emoji