export const menuItems = [
    {
        label: '행사개요',
        to: '/greeting?context=1',
        children: [
            { label: '개회사', to: '/greeting?context=1' },
            { label: '행사개요', to: '/overview-schedule?context=1'},
        ]
    },
    {
        label: '기념행사',
        to: '/ceremony?context=2',
        children: [
            { label: '개막식 및 평화도시 광명포럼', to: '/ceremony?context=2' },
            { label: '시상식', to: '/awards?context=2'},
        ]
    },
    {
        label: '참여행사',
        to: '/peace-garden?context=3',
        children: [
            { label: '평화정원 피크닉', to: '/peace-garden?context=3' },
            { label: '평화주간 학생 미술대회', to: '/art-contest?context=3'},
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