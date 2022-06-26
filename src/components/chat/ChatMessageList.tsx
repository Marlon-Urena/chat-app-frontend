import { findIndex } from 'lodash';
import { useEffect, useState, useRef } from 'react';
//
import Scrollbar from '../Scrollbar';
import LightboxModal from '../LightboxModal';
import ChatMessageItem from './ChatMessageItem';
import { Conversation } from '../../store/chat/types';

// ----------------------------------------------------------------------

interface ChatMessageListProps {
  conversation: Conversation;
  currentUserId: string;
}

export default function ChatMessageList({ conversation, currentUserId }: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(-1);

  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    scrollMessagesToBottom();
  }, [conversation.messages]);

  const images = conversation.messages
    .filter((messages) => messages.contentType === 'image')
    .map((messages) => messages.body);

  const handleOpenLightbox = (url: string) => {
    const chosenImage = findIndex(images, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(chosenImage);
  };

  return (
    <>
      <Scrollbar scrollableNodeProps={{ ref: scrollRef }} sx={{ p: 3, height: 1 }}>
        {conversation.messages.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
            conversation={conversation}
            currentUserId={currentUserId}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </Scrollbar>

      <LightboxModal
        images={images}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onClose={() => setOpenLightbox(false)}
      />
    </>
  );
}
