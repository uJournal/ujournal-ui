import { useBreakpoint } from "baza/hooks/useBreakpoint";
import { FC } from "react";

export const AppBrand: FC = () => {
  const largerThanSm = useBreakpoint({ largerThan: "sm" });

  if (largerThanSm) {
    return (
      <svg
        width="140"
        height="40"
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.0001 22H25L25 37H15L15.0001 22Z" fill="white" />
        <path
          d="M22 6.5C22 8.5 22 37 22 37H25L37 27V3C37 3 27.5 3 25.5 3C23.5 3 22 4.5 22 6.5Z"
          fill="white"
        />
        <path
          d="M18 6.5C18 8.5 18 37 18 37H15L3 27V3C3 3 12.5 3 14.5 3C16.5 3 18 4.5 18 6.5Z"
          fill="white"
        />
        <path d="M16.0001 24H24L24 35H16L16.0001 24Z" fill="#385AC0" />
        <path
          d="M24 7.35279C24 8.76446 24 35 24 35L32 28.5C35 26 35 26 35 24.5C35 23 35 5 35 5C35 5 27.9117 5 26.5 5C25.0883 5 24 5.94111 24 7.35279Z"
          fill="#4169E1"
        />
        <path d="M22 24H24L23.9999 35L22 24Z" fill="black" fillOpacity="0.15" />
        <path
          d="M16 7.35279C16 8.76446 16 35 16 35L8 28.5C5 26 5 26 5 24.5C5 23 5 5 5 5C5 5 12.0883 5 13.5 5C14.9117 5 16 5.94111 16 7.35279Z"
          fill="#F1BF09"
        />
        <path
          d="M53.5455 12.4545H57.4943V21.7727C57.4943 22.8807 57.2292 23.8395 56.6989 24.6491C56.1733 25.4541 55.4394 26.0767 54.4972 26.517C53.5549 26.9527 52.4612 27.1705 51.2159 27.1705C49.9612 27.1705 48.8627 26.9527 47.9205 26.517C46.9782 26.0767 46.2443 25.4541 45.7188 24.6491C45.1979 23.8395 44.9375 22.8807 44.9375 21.7727V12.4545H48.8864V21.4318C48.8864 21.8816 48.9858 22.2841 49.1847 22.6392C49.3835 22.9896 49.6581 23.2642 50.0085 23.4631C50.3636 23.6619 50.7661 23.7614 51.2159 23.7614C51.6705 23.7614 52.0729 23.6619 52.4233 23.4631C52.7737 23.2642 53.0483 22.9896 53.2472 22.6392C53.446 22.2841 53.5455 21.8816 53.5455 21.4318V12.4545ZM65.3654 12.4545H69.2575V22.4261C69.2527 23.3731 69.0136 24.2064 68.5401 24.9261C68.0714 25.6411 67.4227 26.1998 66.5941 26.6023C65.7702 27 64.8209 27.1989 63.7461 27.1989C62.8133 27.1989 61.9611 27.0379 61.1893 26.7159C60.4175 26.3892 59.802 25.8778 59.3427 25.1818C58.8834 24.4811 58.6561 23.572 58.6609 22.4545H62.6097C62.6239 22.8191 62.6855 23.1269 62.7944 23.3778C62.908 23.6288 63.0643 23.8182 63.2631 23.946C63.4667 24.0691 63.7129 24.1307 64.0018 24.1307C64.2953 24.1307 64.5415 24.0668 64.7404 23.9389C64.944 23.8111 65.0979 23.6217 65.2021 23.3707C65.3062 23.1151 65.3607 22.8002 65.3654 22.4261V12.4545ZM76.4414 27.1989C75.2577 27.1989 74.2444 26.9645 73.4016 26.4957C72.5588 26.0223 71.9125 25.3641 71.4627 24.5213C71.0129 23.6738 70.788 22.6913 70.788 21.5739C70.788 20.4564 71.0129 19.4763 71.4627 18.6335C71.9125 17.786 72.5588 17.1278 73.4016 16.6591C74.2444 16.1856 75.2577 15.9489 76.4414 15.9489C77.6251 15.9489 78.6384 16.1856 79.4812 16.6591C80.324 17.1278 80.9703 17.786 81.4201 18.6335C81.8699 19.4763 82.0948 20.4564 82.0948 21.5739C82.0948 22.6913 81.8699 23.6738 81.4201 24.5213C80.9703 25.3641 80.324 26.0223 79.4812 26.4957C78.6384 26.9645 77.6251 27.1989 76.4414 27.1989ZM76.4698 24.3011C76.8013 24.3011 77.0877 24.1899 77.3292 23.9673C77.5707 23.7448 77.7577 23.4276 77.8903 23.0156C78.0228 22.6037 78.0891 22.1136 78.0891 21.5455C78.0891 20.9725 78.0228 20.4825 77.8903 20.0753C77.7577 19.6634 77.5707 19.3461 77.3292 19.1236C77.0877 18.901 76.8013 18.7898 76.4698 18.7898C76.1194 18.7898 75.8188 18.901 75.5678 19.1236C75.3169 19.3461 75.1251 19.6634 74.9925 20.0753C74.86 20.4825 74.7937 20.9725 74.7937 21.5455C74.7937 22.1136 74.86 22.6037 74.9925 23.0156C75.1251 23.4276 75.3169 23.7448 75.5678 23.9673C75.8188 24.1899 76.1194 24.3011 76.4698 24.3011ZM90.7596 22.2273V16.0909H94.68V27H90.9585V24.9261H90.8448C90.6081 25.6222 90.1938 26.1667 89.6019 26.5597C89.0101 26.9479 88.3069 27.142 87.4925 27.142C86.7302 27.142 86.0626 26.9669 85.4897 26.6165C84.9215 26.2661 84.4788 25.7831 84.1616 25.1676C83.8491 24.5521 83.6905 23.8466 83.6857 23.0511V16.0909H87.6062V22.2273C87.6109 22.767 87.7482 23.1908 88.0181 23.4986C88.2927 23.8063 88.6763 23.9602 89.1687 23.9602C89.4954 23.9602 89.7771 23.8916 90.0138 23.7543C90.2553 23.6122 90.44 23.4134 90.5678 23.1577C90.7004 22.8973 90.7643 22.5871 90.7596 22.2273ZM96.674 27V16.0909H100.481V18.1648H100.594C100.793 17.3977 101.108 16.8366 101.539 16.4815C101.975 16.1264 102.484 15.9489 103.066 15.9489C103.237 15.9489 103.405 15.9631 103.57 15.9915C103.741 16.0152 103.904 16.0507 104.06 16.098V19.4432C103.866 19.3769 103.627 19.3272 103.343 19.294C103.059 19.2609 102.815 19.2443 102.612 19.2443C102.228 19.2443 101.882 19.3319 101.575 19.5071C101.272 19.6776 101.032 19.919 100.857 20.2315C100.682 20.5393 100.594 20.9015 100.594 21.3182V27H96.674ZM109.266 20.8636V27H105.346V16.0909H109.067V18.1648H109.181C109.418 17.4735 109.835 16.9313 110.431 16.5384C111.032 16.1454 111.733 15.9489 112.533 15.9489C113.305 15.9489 113.975 16.1264 114.543 16.4815C115.116 16.8319 115.559 17.3149 115.871 17.9304C116.189 18.5459 116.345 19.2491 116.34 20.0398V27H112.42V20.8636C112.424 20.3239 112.287 19.9001 112.008 19.5923C111.733 19.2846 111.35 19.1307 110.857 19.1307C110.535 19.1307 110.254 19.2017 110.012 19.3438C109.775 19.4811 109.593 19.6799 109.465 19.9403C109.337 20.196 109.271 20.5038 109.266 20.8636ZM121.315 27.1705C120.619 27.1705 120.004 27.0568 119.469 26.8295C118.938 26.5975 118.522 26.2472 118.219 25.7784C117.916 25.3097 117.764 24.7131 117.764 23.9886C117.764 23.392 117.866 22.883 118.07 22.4616C118.273 22.0355 118.557 21.6875 118.922 21.4176C119.286 21.1477 119.71 20.9418 120.193 20.7997C120.681 20.6577 121.206 20.5653 121.77 20.5227C122.381 20.4754 122.871 20.4186 123.24 20.3523C123.614 20.2812 123.884 20.1842 124.05 20.0611C124.215 19.9332 124.298 19.7652 124.298 19.5568V19.5284C124.298 19.2443 124.189 19.0265 123.972 18.875C123.754 18.7235 123.474 18.6477 123.134 18.6477C122.759 18.6477 122.454 18.7306 122.217 18.8963C121.985 19.0573 121.846 19.3059 121.798 19.642H118.19C118.238 18.9792 118.448 18.3684 118.822 17.8097C119.201 17.2462 119.753 16.7964 120.477 16.4602C121.202 16.1193 122.106 15.9489 123.19 15.9489C123.972 15.9489 124.672 16.0412 125.293 16.2259C125.913 16.4058 126.441 16.6591 126.876 16.9858C127.312 17.3078 127.643 17.6866 127.871 18.1222C128.103 18.553 128.219 19.0218 128.219 19.5284V27H124.554V25.4659H124.469C124.251 25.8731 123.986 26.2022 123.673 26.4531C123.366 26.7041 123.013 26.8864 122.615 27C122.222 27.1136 121.789 27.1705 121.315 27.1705ZM122.594 24.6989C122.892 24.6989 123.171 24.6373 123.432 24.5142C123.697 24.3911 123.912 24.2135 124.078 23.9815C124.244 23.7495 124.327 23.4678 124.327 23.1364V22.2273C124.223 22.2699 124.111 22.3101 123.993 22.348C123.879 22.3859 123.756 22.4214 123.624 22.4545C123.496 22.4877 123.358 22.5185 123.212 22.5469C123.07 22.5753 122.92 22.6013 122.764 22.625C122.461 22.6723 122.213 22.7505 122.018 22.8594C121.829 22.9635 121.687 23.0938 121.592 23.25C121.502 23.4015 121.457 23.572 121.457 23.7614C121.457 24.0644 121.564 24.2964 121.777 24.4574C121.99 24.6184 122.262 24.6989 122.594 24.6989ZM134.012 12.4545V27H130.092V12.4545H134.012Z"
          fill="black"
        />
      </svg>
    );
  }

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.0001 22H25L25 37H15L15.0001 22Z" fill="white" />
      <path
        d="M22 6.5C22 8.5 22 37 22 37H25L37 27V3C37 3 27.5 3 25.5 3C23.5 3 22 4.5 22 6.5Z"
        fill="white"
      />
      <path
        d="M18 6.5C18 8.5 18 37 18 37H15L3 27V3C3 3 12.5 3 14.5 3C16.5 3 18 4.5 18 6.5Z"
        fill="white"
      />
      <path d="M16.0001 24H24L24 35H16L16.0001 24Z" fill="#385AC0" />
      <path
        d="M24 7.35279C24 8.76446 24 35 24 35L32 28.5C35 26 35 26 35 24.5C35 23 35 5 35 5C35 5 27.9117 5 26.5 5C25.0883 5 24 5.94111 24 7.35279Z"
        fill="#4169E1"
      />
      <path d="M22 24H24L23.9999 35L22 24Z" fill="black" fillOpacity="0.15" />
      <path
        d="M16 7.35279C16 8.76446 16 35 16 35L8 28.5C5 26 5 26 5 24.5C5 23 5 5 5 5C5 5 12.0883 5 13.5 5C14.9117 5 16 5.94111 16 7.35279Z"
        fill="#F1BF09"
      />
    </svg>
  );
};
