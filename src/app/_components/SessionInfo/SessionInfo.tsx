import React from 'react';
import './SessionInfo.scss';
import Image from 'next/image';

// 타입 정의
interface Speaker {
    name: string;
    role: string;
    position: string;
    photo: string;
}

interface Chair {
    name: string;
    role: string;
}

interface Panelist {
    name: string;
    position: string;
    role: string;
}

interface SessionComponentProps {
    sessionTitle: string;
    sessionSubtitle: string;
    sessionDescription: string;
    speaker: Speaker;
    chair: Chair;
    panelists: Panelist[];
    themeColor: string;
}

export default function SessionInfo({
                                        sessionTitle,
                                        sessionSubtitle,
                                        sessionDescription,
                                        speaker,
                                        chair,
                                        panelists,
                                        themeColor,
                                    }: SessionComponentProps) {
    return (
        <div className="session-container" style={{'--theme-color': themeColor} as React.CSSProperties}>
            <div className="session-wrapper">
                <div className="session-title">{sessionTitle}</div>
                <div className="session-subtitle">{sessionSubtitle}</div>
                <div className="session-description">{sessionDescription}</div>

                <div className="flex justify-center">
                    <div className="speaker-container">
                        <div className="speaker-photo">
                            <Image src={speaker.photo}
                                   alt={speaker.name}
                                   width={300}
                                   height={400}
                            />
                        </div>
                        <div className="speaker-name">{speaker.name}<span className={'session-position'}>{speaker.position}</span></div>
                        <div className="speaker-role">{speaker.role}</div>
                    </div>
                </div>

                <div className="session-role">좌장</div>
                <div className="session-person-name">{chair.name}<span
                    className="session-person-role">{chair.role}</span></div>


                <div className="session-divider"></div>

                <div className="session-role">패널</div>
                {panelists.map((panelist, index) => (
                    <div key={index} className="session-person">
                        <span className={'session-person-name'}>{panelist.name}</span><span className={'session-position'}>{panelist.position}</span>
                        <span className={'session-person-role'}>{panelist.role}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

