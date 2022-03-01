import { ReactNode } from "react";

export interface ModalScreenProps {
    builder: () => ReactNode;
    onClose?: () => void;
    navigation: any,
    route: any,
}