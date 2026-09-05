import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TicketTier } from '../types';
import { TicketModal } from '../components/TicketModal';
import { VideoModal } from '../components/VideoModal';
import { VendorModal } from '../components/VendorModal';
import { CosplayModal } from '../components/CosplayModal';
import { TICKET_TIERS } from '../data/hnmData';

interface ModalContextType {
  openTicketModal: (tier?: TicketTier | null) => void;
  closeTicketModal: () => void;
  openVideoModal: (videoId?: string) => void;
  closeVideoModal: () => void;
  openVendorModal: () => void;
  closeVendorModal: () => void;
  openCosplayModal: () => void;
  closeCosplayModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTicketTier, setSelectedTicketTier] = useState<TicketTier | null>(null);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | undefined>(undefined);

  const [vendorModalOpen, setVendorModalOpen] = useState(false);
  const [cosplayModalOpen, setCosplayModalOpen] = useState(false);

  const openTicketModal = (tier?: TicketTier | null) => {
    setSelectedTicketTier(tier || TICKET_TIERS[1]);
    setTicketModalOpen(true);
  };

  const closeTicketModal = () => {
    setTicketModalOpen(false);
  };

  const openVideoModal = (videoId?: string) => {
    setSelectedVideoId(videoId || 'v1');
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  const openVendorModal = () => {
    setVendorModalOpen(true);
  };

  const closeVendorModal = () => {
    setVendorModalOpen(false);
  };

  const openCosplayModal = () => {
    setCosplayModalOpen(true);
  };

  const closeCosplayModal = () => {
    setCosplayModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openTicketModal,
        closeTicketModal,
        openVideoModal,
        closeVideoModal,
        openVendorModal,
        closeVendorModal,
        openCosplayModal,
        closeCosplayModal,
      }}
    >
      {children}

      <TicketModal
        isOpen={ticketModalOpen}
        onClose={closeTicketModal}
        selectedTier={selectedTicketTier}
        tiers={TICKET_TIERS}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={closeVideoModal}
        initialVideoId={selectedVideoId}
      />

      <VendorModal
        isOpen={vendorModalOpen}
        onClose={closeVendorModal}
      />

      <CosplayModal
        isOpen={cosplayModalOpen}
        onClose={closeCosplayModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
