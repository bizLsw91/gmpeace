import React from 'react';
import './SessionInfo.scss';
import Image from 'next/image';

// 타입 정의
interface Speaker {
    name: string;
    roles: string[];
    position: string;
    photo: string;
}

interface SessionComponentProps {
    sessionTitle: string;
    sessionSubtitle: string;
    sessionDescription: string;
    speakers: Speaker[];
    themeColor: string;
}

export default function SessionInfo({
                                        sessionTitle,
                                        sessionSubtitle,
                                        sessionDescription,
                                        speakers,
                                        themeColor,
                                    }: SessionComponentProps) {
    return (
        <div className="session-container" style={{'--theme-color': themeColor} as React.CSSProperties}>
            <div className="session-wrapper">
                <div className="session-title">{sessionTitle}</div>
                <div className="session-subtitle">{sessionSubtitle}</div>
                <div className="session-description">{sessionDescription}</div>

                <div className="flex justify-center flex-wrap gap-5">
                    {speakers.map((speaker, idx) => (
                        <div className="speaker-container" key={idx}>
                            <div className="speaker-photo">
                                <Image src={speaker.photo}
                                       alt={speaker.name}
                                       width={300}
                                       height={400}
                                />
                            </div>
                            <div className="speaker-name">{speaker.name}<span
                                className={'session-position'}>{speaker.position}</span></div>
                            <div className="speaker-role">
                                <ul className={'ul-circle'}>
                                    {speaker.roles.map((role, idx2) => (
                                        <li key={idx2}>{role}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

