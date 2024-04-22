import React from 'react'


interface IconProps {
    fill: string;
    className?: string;
}

function InstagramIcon(props: IconProps) {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_405_245)">
                <path d="M15 2.7025C19.005 2.7025 19.48 2.7175 21.0613 2.79C22.6963 2.865 24.38 3.2375 25.5713 4.42875C26.7738 5.63125 27.135 7.29875 27.21 8.93875C27.2825 10.52 27.2975 10.995 27.2975 15C27.2975 19.005 27.2825 19.48 27.21 21.0613C27.1362 22.6875 26.755 24.3875 25.5713 25.5713C24.3688 26.7738 22.7025 27.135 21.0613 27.21C19.48 27.2825 19.005 27.2975 15 27.2975C10.995 27.2975 10.52 27.2825 8.93875 27.21C7.325 27.1362 5.6025 26.7463 4.42875 25.5713C3.2325 24.375 2.865 22.6913 2.79 21.0613C2.7175 19.48 2.7025 19.005 2.7025 15C2.7025 10.995 2.7175 10.52 2.79 8.93875C2.86375 7.31875 3.24875 5.60875 4.42875 4.42875C5.62875 3.22875 7.3025 2.865 8.93875 2.79C10.52 2.7175 10.995 2.7025 15 2.7025ZM15 0C10.9262 0 10.415 0.0175 8.815 0.09C6.49625 0.19625 4.19375 0.84125 2.5175 2.5175C0.835 4.2 0.19625 6.4975 0.09 8.815C0.0175 10.415 0 10.9262 0 15C0 19.0737 0.0175 19.585 0.09 21.185C0.19625 23.5012 0.84375 25.81 2.5175 27.4825C4.19875 29.1637 6.5 29.8037 8.815 29.91C10.415 29.9825 10.9262 30 15 30C19.0737 30 19.585 29.9825 21.185 29.91C23.5025 29.8037 25.8075 29.1575 27.4825 27.4825C29.1663 25.7987 29.8037 23.5025 29.91 21.185C29.9825 19.585 30 19.0737 30 15C30 10.9262 29.9825 10.415 29.91 8.815C29.8037 6.49625 29.1575 4.1925 27.4825 2.5175C25.8037 0.83875 23.4963 0.195 21.185 0.09C19.585 0.0175 19.0737 0 15 0Z" fill={props.fill} />
                <path d="M14.9994 7.29688C10.7456 7.29688 7.29688 10.7456 7.29688 14.9994C7.29688 19.2531 10.7456 22.7019 14.9994 22.7019C19.2531 22.7019 22.7019 19.2531 22.7019 14.9994C22.7019 10.7456 19.2531 7.29688 14.9994 7.29688ZM14.9994 19.9994C12.2381 19.9994 9.99938 17.7606 9.99938 14.9994C9.99938 12.2381 12.2381 9.99938 14.9994 9.99938C17.7606 9.99938 19.9994 12.2381 19.9994 14.9994C19.9994 17.7606 17.7606 19.9994 14.9994 19.9994Z" fill={props.fill} />
                <path d="M23.007 8.79336C24.0011 8.79336 24.807 7.98747 24.807 6.99336C24.807 5.99925 24.0011 5.19336 23.007 5.19336C22.0129 5.19336 21.207 5.99925 21.207 6.99336C21.207 7.98747 22.0129 8.79336 23.007 8.79336Z" fill={props.fill} />
            </g>
            <defs>
                <clipPath id="clip0_405_245">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default InstagramIcon