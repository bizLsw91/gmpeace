export const menuItems = [
    {
        label: '행사개요',
        to: '/greeting',
        subItems: [
            { label: '인사말', to: '/greeting' },
            { label: '오시는 길', to: '/overview-schedule'},
        ]
    },
    {
        label: '기념행사',
        to: '/opening-ceremony',
        subItems: [
            { label: '개막식', to: '/opening-ceremony' },
            { label: '평화도시 광명포럼', to: '/forum'},
            { label: '시상식', to: '/awards'},
        ]
    },
    {
        label: '참여행사',
        to: '/peace-garden',
        subItems: [
            { label: '평화정원 피크닉', to: '/peace-garden' },
            { label: '평화주간 학생 미술대회', to: '/art-contest'},
        ]
    },
    {
        label: '만족도조사',
        to: '/peace-garden',
    },
]