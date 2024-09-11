export const menuItems = [
    {
        label: '행사개요',
        to: '/greeting',
        children: [
            { label: '개회사', to: '/greeting' },
            { label: '행사개요', to: '/overview-schedule'},
        ]
    },
    {
        label: '기념행사',
        to: '/ceremony',
        children: [
            { label: '개막식 및 평화도시 광명포럼', to: '/ceremony' },
            { label: '시상식', to: '/awards'},
        ]
    },
    {
        label: '참여행사',
        to: '/peace-garden',
        children: [
            { label: '평화정원 피크닉', to: '/peace-garden' },
            { label: '평화주간 학생 미술대회', to: '/art-contest'},
        ]
    },
    {
        label: '사전신청',
        to: '/pre-registration',
        children: [
            { label: '사전신청 안내 및 신청', to: '/pre-registration' },
        ]
    },
    {
        label: '만족도조사',
        to: '/survey',
    },
]