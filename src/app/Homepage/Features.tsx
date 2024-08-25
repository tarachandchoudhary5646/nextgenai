'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { useRouter } from 'next/navigation';

const ItemTypes = {
    FEATURE: 'feature',
};

interface DraggableFeatureProps {
    featureKey: number;
    feature: FeatureItem;
}

const DraggableFeature: React.FC<DraggableFeatureProps> = ({ featureKey, feature }) => {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.FEATURE,
        item: { feature },
    }));
    const dropRef = useRef<HTMLDivElement>(null);
    drag(dropRef);

    return (
        <div ref={dropRef} className={`feature-${featureKey} md:absolute bottom-0 left-1/2`}>
            <div
                className="bg-[#FAFAFB] border-[3px] border-white shadow-md rounded-3xl w-[6.4rem] h-[6.5rem] flex items-center justify-center cursor-move group"
            >
                <Image
                    className="mx-auto w-[3.6rem]"
                    src={feature.icon || '/magic.svg'}
                    width={40}
                    height={40}
                    alt={`Feature Icon ${featureKey}`}
                />
                <span className='bg-red-300 border border-red-500 rounded-full absolute -top-12 graphikMedium text-nowrap px-3 py-1 text-sm text-red-500 hidden group-hover:inline-block'>Drag Me</span>
            </div>
        </div>
    );
};

interface DropZoneProps {
    onDrop: (feature: FeatureItem) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.FEATURE,
        drop: (item: { feature: FeatureItem }) => onDrop(item.feature),
    }));
    const dropRef = useRef<HTMLDivElement>(null);
    drop(dropRef);

    return (
        <div ref={dropRef} className='max-w-[64rem] w-full p-5 mx-auto'>
            <div className='bg-white py-5 md:py-8 px-5 rounded-3xl shadow-lg text-center md:my-[4rem]'>
                <Image className='mx-auto w-[7.2rem]' src={'/featureIcon/featureFrame.svg'} width={72} height={72} alt='Frame' />
                <p className='graphikMedium text-[1.6rem] mt-4'>Drag features to view details</p>
            </div>
        </div>
    );
};

interface FeatureItem {
    menu?: string;
    link: string;
    icon?: string;
}

const features: FeatureItem[] = [
    { icon: '/featureIcon/feature1.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature2.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature3.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature4.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature5.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature6.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature7.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature8.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature9.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature10.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature11.svg', link: 'https://www.google.com/' },
    { icon: '/featureIcon/feature12.svg', link: 'https://www.google.com/' }
];

const Features: React.FC = () => {
    const router = useRouter();

    const isTouchDevice = (): boolean => {
        return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    const backend = isTouchDevice() ? TouchBackend : HTML5Backend;

    const handleDrop = (feature: FeatureItem) => {
        router.push(feature.link);
    };

    return (
        <DndProvider backend={backend}>
            <DropZone onDrop={handleDrop} />
            <div className="flex items-center justify-center mt-[0] py-8 md:py-12 pb-5 gap-3 flex-wrap">
                {features.map((feature, index) => (
                    <DraggableFeature key={index} featureKey={index} feature={feature} />
                ))}
            </div>
        </DndProvider>
    );
};

export default Features;
