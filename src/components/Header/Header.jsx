import React from "react";

export const Header = () => {
  return (
    <header className="py-4 flex justify-between items-center max-w-screen-lg mx-auto">
      
        <div className="left-side-header items-center flex gap-6">
          <div className="logo">
          <svg width="102" height="40" viewBox="0 0 102 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8483 8.15896V17.8214H1.13868V8.15896H3.16332V16.2016H5.53703V8.15896H7.44996V16.2016H9.83763V8.15896H11.8483ZM21.1768 17.8214H19.1521V13.9396C19.1521 12.6178 19.2499 11.3798 19.4454 10.2255L16.4014 17.8214H13.8881V8.15896H15.9127V12.0826C15.9127 12.8645 15.8848 13.5161 15.829 14.0374C15.7824 14.5494 15.7126 15.1172 15.6195 15.7409L18.7193 8.15896H21.1768V17.8214ZM33.6313 12.9343C33.6313 14.3213 33.2311 15.3732 32.4305 16.0899C31.63 16.7974 30.5176 17.1744 29.0934 17.2209V18.3519H27.0967V17.207C25.6538 17.1418 24.5368 16.7602 23.7455 16.062C22.9543 15.3546 22.5587 14.3259 22.5587 12.9762C22.5587 11.5892 22.959 10.542 23.7595 9.83452C24.56 9.11775 25.6724 8.73609 27.0967 8.68955V7.64233H29.0934V8.70351C30.5362 8.76868 31.6532 9.15498 32.4445 9.86244C33.2357 10.5606 33.6313 11.5845 33.6313 12.9343ZM29.0096 15.9084C29.8939 15.8526 30.5362 15.5873 30.9365 15.1125C31.3367 14.6378 31.5369 13.9117 31.5369 12.9343C31.5369 11.9755 31.3321 11.2587 30.9225 10.784C30.5129 10.3093 29.8753 10.0486 29.0096 10.0021V15.9084ZM24.6531 12.9762C24.6531 13.935 24.8579 14.6518 25.2675 15.1265C25.6771 15.6012 26.3147 15.8619 27.1804 15.9084V10.0021C26.2961 10.0579 25.6538 10.3232 25.2535 10.798C24.8533 11.2727 24.6531 11.9988 24.6531 12.9762ZM40.928 8.15896L40.7046 9.7647H38.261V17.8214H36.2085V9.7647H33.6393V8.15896H40.928Z" fill="#9534D2"/>
            <path d="M4.95058 24.2562C5.55564 24.2562 6.08158 24.3447 6.5284 24.5215C6.97522 24.6891 7.41272 24.9497 7.84092 25.3035L6.82162 26.4903C6.2631 26.0342 5.67666 25.8061 5.06228 25.8061C4.37344 25.8061 3.82423 26.0901 3.41465 26.6579C3.01438 27.2164 2.81424 28.0961 2.81424 29.2969C2.81424 30.4698 3.01438 31.3401 3.41465 31.908C3.82423 32.4665 4.3781 32.7457 5.07625 32.7457C5.43929 32.7457 5.76974 32.6806 6.06762 32.5503C6.3655 32.4106 6.67734 32.2152 7.00314 31.9638L7.95262 33.1507C7.6082 33.5044 7.18001 33.7976 6.66803 34.0303C6.16536 34.2537 5.60684 34.3655 4.99247 34.3655C4.12676 34.3655 3.36811 34.17 2.7165 33.779C2.0649 33.388 1.55757 32.8156 1.19454 32.0616C0.831497 31.2982 0.649979 30.3767 0.649979 29.2969C0.649979 28.245 0.836152 27.3421 1.2085 26.5881C1.58084 25.8248 2.09282 25.2476 2.74443 24.8567C3.39603 24.4564 4.13142 24.2562 4.95058 24.2562ZM11.1681 24.4797V34.142H9.11559V24.4797H11.1681ZM20.5086 34.142H17.8696L14.7978 26.4764C14.8815 27.1373 14.9467 27.761 14.9932 28.3474C15.0491 28.9245 15.077 29.6041 15.077 30.386V34.142H13.2199V24.4797H15.8031L18.9308 32.1593C18.7446 30.9119 18.6515 29.767 18.6515 28.7244V24.4797H20.5086V34.142ZM28.3135 24.4797L28.0901 25.9737H24.5993V28.487H27.6433V29.9671H24.5993V32.634H28.3414V34.142H22.5468V24.4797H28.3135ZM39.2929 34.142H37.2822L37.0728 30.2184C37.0076 29.0456 36.975 28.0495 36.975 27.2304C36.975 26.7929 36.9797 26.4764 36.989 26.2809L35.3553 33.1088H33.4145L31.6691 26.2669C31.7063 26.8347 31.7249 27.4724 31.7249 28.1798C31.7249 28.9338 31.7063 29.6273 31.6691 30.2603L31.4597 34.142H29.4629L30.2169 24.4797H32.828L34.4198 31.14L35.9138 24.4797H38.5529L39.2929 34.142ZM45.9837 34.142L45.4391 31.9778H42.4091L41.8646 34.142H39.7283L42.7024 24.4797H45.2017L48.1619 34.142H45.9837ZM42.8001 30.4558H45.0482L43.9172 26.0016L42.8001 30.4558Z" fill="#9534D2"/>
            <path d="M63.3062 19.4977H60.2042C58.883 19.4977 57.8107 20.57 57.8107 21.8912C57.8107 23.2124 58.883 24.2847 60.2042 24.2847H64.1789C64.848 24.2847 65.4321 24.7251 65.6651 25.3523C66.4149 27.3709 67.5089 29.223 68.8751 30.8365C69.5756 31.6631 68.9979 32.93 67.9145 32.93H64.7056C63.5599 32.93 62.5722 33.8108 62.5179 34.9565C62.4605 36.1788 63.4354 37.1889 64.6449 37.1889H80.3878C81.224 37.3054 82.076 37.366 82.9441 37.366C93.2011 37.366 101.503 28.9839 101.371 18.6934C101.242 8.74443 93.1197 0.630442 83.1707 0.509171C81.7761 0.491619 80.4165 0.630442 79.1081 0.908089C75.9806 1.57189 72.7876 1.87826 69.5915 1.87826H54.3337C53.0444 1.87826 51.9338 2.86917 51.8732 4.15847C51.8077 5.53394 52.904 6.67006 54.2651 6.67006H64.0705C66.0954 6.67006 67.4166 8.80666 66.5007 10.6114C66.4895 10.6321 66.48 10.6529 66.4688 10.6736C66.0092 11.5911 65.0678 12.1687 64.0402 12.1687H51.4934C50.2041 12.1687 49.0935 13.1597 49.0329 14.449C48.9675 15.8244 50.0637 16.9605 51.4248 16.9605H63.3046C64.0242 16.9605 64.5987 17.5573 64.5715 18.277C64.546 18.9583 63.9859 19.4961 63.3046 19.4961L63.3062 19.4977ZM77.7757 7.88756C77.9417 5.31055 80.0352 3.22022 82.6122 3.05905C85.7381 2.86438 88.3119 5.4398 88.1141 8.56572C87.9513 11.1443 85.8594 13.2362 83.2792 13.399C80.1485 13.5969 77.5715 11.0151 77.7741 7.88596L77.7757 7.88756ZM67.4118 16.1404C67.2187 13.0145 69.7942 10.4422 72.9201 10.6401C75.5003 10.8028 77.5922 12.8964 77.7534 15.4766C77.9496 18.6073 75.3662 21.1827 72.2371 20.98C69.6601 20.8125 67.5714 18.719 67.4102 16.142L67.4118 16.1404ZM81.4426 28.0409C81.2798 30.6195 79.1879 32.7114 76.6093 32.8742C73.4786 33.072 70.8984 30.4902 71.101 27.3611C71.2686 24.7825 73.3621 22.6938 75.9407 22.5326C79.0666 22.338 81.6388 24.915 81.4426 28.0409ZM83.2425 20.6338C82.0665 20.8301 81.0612 19.8296 81.2511 18.6536C81.366 17.9419 81.9372 17.3658 82.6489 17.2462C83.8249 17.0499 84.8334 18.0488 84.6435 19.2264C84.5286 19.9397 83.9557 20.5157 83.2425 20.6354V20.6338ZM94.792 28.0377C94.6308 30.6163 92.5405 32.7098 89.9619 32.8742C86.8311 33.0752 84.2509 30.4934 84.452 27.3643C84.6164 24.7873 86.7067 22.6954 89.2837 22.5326C92.408 22.3348 94.9866 24.9118 94.792 28.0377ZM93.3096 20.9912C90.4469 20.9912 88.1268 18.6711 88.1268 15.8117C88.1268 12.9522 90.6496 10.4327 93.6798 10.6433C96.236 10.8204 98.3056 12.8932 98.4796 15.4494C98.6854 18.4764 96.2903 20.9928 93.3112 20.9928L93.3096 20.9912Z" fill="#9534D2"/>
            <rect x="54.0822" y="33.0091" width="6.42883" height="4.28589" rx="2.14294" fill="#9534D2"/>
            <rect x="41.4031" y="1.93646" width="8.03604" height="4.64304" rx="2.27732" fill="#9534D2"/>
          </svg>

          </div>

          <div className="profile-button flex gap-3">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.57101C16 10.7802 14.2091 12.571 12 12.571C9.79086 12.571 8 10.7802 8 8.57101C8 6.36188 9.79086 4.57101 12 4.57101C14.2091 4.57101 16 6.36188 16 8.57101ZM14.5 8.57101C14.5 9.95173 13.3807 11.071 12 11.071C10.6193 11.071 9.5 9.95173 9.5 8.57101C9.5 7.1903 10.6193 6.07101 12 6.07101C13.3807 6.07101 14.5 7.1903 14.5 8.57101Z" fill="#141C24"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4 18.343V20.571H20V18.343C20 16.6756 18.9657 15.1832 17.4045 14.5977L17.2669 14.5461C13.8711 13.2727 10.1289 13.2727 6.73315 14.5461L6.59551 14.5977C5.03429 15.1832 4 16.6756 4 18.343ZM7.25984 15.9506C10.316 14.8045 13.684 14.8045 16.7402 15.9506L16.8778 16.0022C17.8536 16.3681 18.5 17.3009 18.5 18.343V19.071H5.5V18.343C5.5 17.3009 6.14643 16.3681 7.12219 16.0022L7.25984 15.9506Z" fill="#141C24"/>
            </svg>
            <h2>Профиль</h2>
          </div>

          <div className="tickets-button flex gap-3">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.571C12.5523 17.571 13 17.1233 13 16.571C13 16.0187 12.5523 15.571 12 15.571C11.4477 15.571 11 16.0187 11 16.571C11 17.1233 11.4477 17.571 12 17.571Z" fill="#141C24"/>
              <path d="M13 12.571C13 13.1233 12.5523 13.571 12 13.571C11.4477 13.571 11 13.1233 11 12.571C11 12.0187 11.4477 11.571 12 11.571C12.5523 11.571 13 12.0187 13 12.571Z" fill="#141C24"/>
              <path d="M12 9.57101C12.5523 9.57101 13 9.12329 13 8.57101C13 8.01874 12.5523 7.57101 12 7.57101C11.4477 7.57101 11 8.01874 11 8.57101C11 9.12329 11.4477 9.57101 12 9.57101Z" fill="#141C24"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14.571V18.571C2 19.6756 2.89543 20.571 4 20.571H20C21.1046 20.571 22 19.6756 22 18.571V14.571C20.8954 14.571 20 13.6756 20 12.571C20 11.4664 20.8954 10.571 22 10.571V6.57101C22 5.46643 21.1046 4.57101 20 4.57101H4C2.89543 4.57101 2 5.46646 2 6.57101V10.571C3.10457 10.571 4 11.4664 4 12.571C4 13.6756 3.10457 14.571 2 14.571ZM20.5 18.571C20.5 18.8472 20.2761 19.071 20 19.071H4C3.72385 19.071 3.5 18.8472 3.5 18.571V15.7342C4.68246 15.1725 5.5 13.9672 5.5 12.571C5.5 11.1748 4.68248 9.96957 3.5 9.40784V6.57101C3.5 6.29486 3.72385 6.07101 4 6.07101H20C20.2761 6.07101 20.5 6.29486 20.5 6.57101V9.40784C19.3175 9.96957 18.5 11.1748 18.5 12.571C18.5 13.9672 19.3175 15.1725 20.5 15.7342V18.571Z" fill="#141C24"/>
            </svg>
            <h2>Билеты</h2>
          </div>
        </div>

        <div className="right-side-header tickets-button flex gap-3">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4706 20.896C14.4706 20.5232 14.1684 20.221 13.7956 20.221H4.82353C4.54739 20.221 4.32353 19.9972 4.32353 19.721V5.42101C4.32353 5.14487 4.54739 4.92101 4.82353 4.92101H13.7956C14.1684 4.92101 14.4706 4.61881 14.4706 4.24601C14.4706 3.87322 14.1684 3.57101 13.7956 3.57101H5C3.89543 3.57101 3 4.46644 3 5.57101V19.571C3 20.6756 3.89543 21.571 5 21.571H13.7956C14.1684 21.571 14.4706 21.2688 14.4706 20.896ZM12.8947 12.211C12.5468 12.211 12.2647 12.4931 12.2647 12.841C12.2647 13.189 12.5468 13.471 12.8947 13.471H18.4412L16.2698 15.6858C16.0056 15.9553 16.0056 16.3867 16.2698 16.6562C16.5415 16.9334 16.9879 16.9334 17.2596 16.6562L20.3137 13.5411C20.6949 13.1522 20.6949 12.5298 20.3137 12.1409L17.2596 9.02582C16.9879 8.74865 16.5415 8.74865 16.2698 9.02582C16.0056 9.29532 16.0056 9.72671 16.2698 9.99621L18.4412 12.211H12.8947Z" fill="#141C24"/>
          </svg>
          <h2>Выйти</h2>
        </div>
    </header>
  );
};