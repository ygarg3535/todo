import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authActions";

const Navbar = ({sidebarToggle,setSidebarToggle}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="py-5 flex md:gap-40 sm:gap-14 lg:justify-between sm:mx-2 overflow-hidden lg:mx-14 ">
      <div className="flex items-center gap-6">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>setSidebarToggle(!sidebarToggle)}
            className="cursor-pointer"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#1B281B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex items-center gap-1">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.71812 6.71757C7.71011 5.72557 9.59348 5.34578 12.2718 6.13352C12.4606 6.18905 12.6515 6.24999 12.8442 6.31629C11.6298 7.1782 10.44 8.18116 9.31084 9.31029C8.87424 9.74689 8.4572 10.1918 8.06039 10.643C7.51329 11.2651 7.57406 12.2129 8.19613 12.76C8.81819 13.3071 9.766 13.2463 10.3131 12.6243C10.6675 12.2213 11.0407 11.8231 11.4322 11.4316C12.9144 9.94939 14.4837 8.73835 16.0284 7.81847C17.573 8.73835 19.1423 9.94939 20.6245 11.4316C22.3065 13.1136 23.6393 14.9078 24.5937 16.6506C24.6229 16.7154 24.6568 16.7781 24.6951 16.8384C25.2348 17.8505 25.6458 18.8433 25.9226 19.7844C26.7104 22.4627 26.3306 24.346 25.3386 25.338C24.3466 26.33 22.4632 26.7098 19.7849 25.9221C19.5961 25.8666 19.4052 25.8056 19.2125 25.7393C20.4269 24.8774 21.6167 23.8745 22.7459 22.7453C23.1635 22.3277 23.5633 21.9024 23.9445 21.4713C24.4934 20.8508 24.4352 19.9028 23.8147 19.354C23.1942 18.8051 22.2462 18.8632 21.6974 19.4838C21.3568 19.8689 20.999 20.2495 20.6245 20.624C19.1423 22.1062 17.573 23.3173 16.0284 24.2371C14.4837 23.3173 12.9144 22.1062 11.4322 20.624C8.71081 17.9026 6.90357 14.8875 6.13407 12.2712C5.34634 9.59293 5.72612 7.70956 6.71812 6.71757ZM13.1183 3.25542C14.0718 3.53587 15.0479 3.92169 16.0284 4.40533C17.0088 3.92169 17.9849 3.53588 18.9384 3.25542C22.0611 2.33701 25.3277 2.46405 27.4599 4.59625C28.9191 6.05539 29.4396 8.07153 29.3296 10.159C29.2317 12.0189 28.6353 14.0318 27.6508 16.0278C28.1345 17.0082 28.5203 17.9843 28.8007 18.9379C29.7192 22.0605 29.5921 25.3272 27.4599 27.4594C25.3277 29.5916 22.0611 29.7186 18.9384 28.8002C17.9849 28.5197 17.0088 28.1339 16.0284 27.6503C15.0479 28.1339 14.0718 28.5197 13.1183 28.8002C9.99566 29.7186 6.72899 29.5916 4.5968 27.4594C3.13867 26.0012 2.61787 23.9868 2.72684 21.9009C2.82406 20.0398 3.42065 18.0253 4.40591 16.0279C3.92226 15.0474 3.53643 14.0713 3.25597 13.1177C2.33756 9.99511 2.4646 6.72844 4.5968 4.59624C6.72899 2.46405 9.99566 2.33701 13.1183 3.25542ZM22.7459 9.31029C21.6167 8.18116 20.4269 7.1782 19.2125 6.31629C19.4052 6.24999 19.5961 6.18905 19.7849 6.13352C22.4632 5.34579 24.3466 5.72557 25.3386 6.71757C26.0228 7.40176 26.4138 8.48246 26.3338 10.0013C26.2886 10.8601 26.0921 11.8198 25.7399 12.8437C24.878 11.6293 23.875 10.4394 22.7459 9.31029ZM9.31084 22.7453C10.44 23.8745 11.6298 24.8774 12.8442 25.7393C12.6515 25.8056 12.4606 25.8666 12.2718 25.9221C9.59348 26.7098 7.71011 26.33 6.71812 25.338C6.03437 24.6543 5.6435 23.5746 5.72275 22.0574C5.76765 21.1979 5.9642 20.2371 6.31683 19.2119C7.17874 20.4263 8.1817 21.6162 9.31084 22.7453ZM19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z"
              fill="#3F9142"
            />
          </svg>
          <svg
            width="51"
            height="18"
            viewBox="0 0 51 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4375 0.921875C8.09375 0.921875 9.54688 1.25781 10.7969 1.92969C12.0469 2.60156 13.0156 3.53906 13.7031 4.74219C14.4062 5.94531 14.7578 7.35938 14.7578 8.98438C14.7578 10.5312 14.4297 11.9375 13.7734 13.2031C13.1172 14.4531 12.1797 15.4453 10.9609 16.1797C9.74219 16.9141 8.28906 17.2812 6.60156 17.2812C5.52344 17.2812 4.44531 17.2266 3.36719 17.1172C2.30469 17.0078 1.29688 16.8594 0.34375 16.6719V1.53125C1.3125 1.375 2.30469 1.23438 3.32031 1.10938C4.33594 0.984375 5.375 0.921875 6.4375 0.921875ZM6.50781 3.96875C6.03906 3.96875 5.54688 3.99219 5.03125 4.03906C4.51562 4.08594 4.03906 4.14844 3.60156 4.22656V13.9766C4.07031 14.0703 4.55469 14.1406 5.05469 14.1875C5.57031 14.2188 6.05469 14.2344 6.50781 14.2344C7.53906 14.2344 8.42188 14.0156 9.15625 13.5781C9.89062 13.125 10.4531 12.5078 10.8438 11.7266C11.2344 10.9453 11.4297 10.0703 11.4297 9.10156C11.4297 8.10156 11.2344 7.21875 10.8438 6.45312C10.4531 5.6875 9.89062 5.08594 9.15625 4.64844C8.42188 4.19531 7.53906 3.96875 6.50781 3.96875ZM22.1884 4.85938C23.3447 4.85938 24.3994 5.14062 25.3525 5.70312C26.3056 6.25 27.0713 7 27.6494 7.95312C28.2431 8.89062 28.54 9.94531 28.54 11.1172C28.54 12.2891 28.2431 13.3438 27.6494 14.2812C27.0713 15.2188 26.3056 15.9688 25.3525 16.5312C24.3994 17.0781 23.3447 17.3516 22.1884 17.3516C21.0478 17.3516 19.9931 17.0781 19.0244 16.5312C18.0713 15.9688 17.3056 15.2188 16.7275 14.2812C16.1494 13.3438 15.8603 12.2891 15.8603 11.1172C15.8603 9.94531 16.1494 8.89062 16.7275 7.95312C17.3056 7 18.0713 6.25 19.0244 5.70312C19.9931 5.14062 21.0478 4.85938 22.1884 4.85938ZM22.1884 7.74219C21.6259 7.74219 21.1025 7.875 20.6181 8.14062C20.1338 8.40625 19.7431 8.78906 19.4463 9.28906C19.165 9.78906 19.0244 10.3984 19.0244 11.1172C19.0244 11.8359 19.165 12.4453 19.4463 12.9453C19.7431 13.4453 20.1338 13.8281 20.6181 14.0938C21.1025 14.3438 21.6259 14.4688 22.1884 14.4688C22.7509 14.4688 23.2744 14.3438 23.7588 14.0938C24.2431 13.8281 24.6338 13.4453 24.9306 12.9453C25.2275 12.4453 25.3759 11.8359 25.3759 11.1172C25.3759 10.3984 25.2275 9.78906 24.9306 9.28906C24.6338 8.78906 24.2431 8.40625 23.7588 8.14062C23.2744 7.875 22.7509 7.74219 22.1884 7.74219ZM39.3456 14.0703V17H30.7909V14.0703H33.4394V4.22656H30.7909V1.29688H39.3456V4.22656H36.6972V14.0703H39.3456ZM46.7294 1.71875V5.16406H50.0106V7.64844H46.7294V12.7578C46.7294 13.2891 46.8466 13.7109 47.0809 14.0234C47.3309 14.3203 47.6981 14.4688 48.1825 14.4688C48.6044 14.4688 48.9637 14.4219 49.2606 14.3281C49.5731 14.2344 49.8622 14.1016 50.1278 13.9297V16.2969C49.8309 16.5938 49.4559 16.8438 49.0028 17.0469C48.5653 17.25 48.0106 17.3516 47.3387 17.3516C46.2762 17.3516 45.4091 17.0156 44.7372 16.3438C44.0809 15.6562 43.7528 14.7188 43.7528 13.5312V7.64844H41.62V6.125C42.37 5.85938 43.0575 5.35938 43.6825 4.625C44.3231 3.89062 44.8309 2.92188 45.2059 1.71875H46.7294Z"
              fill="#3F9142"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <button className="font-bold" onClick={handleLogout}>
          Log out
        </button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
            stroke="#1B281B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z"
            stroke="#1B281B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z"
            stroke="#1B281B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z"
            stroke="#1B281B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z"
            stroke="#1B281B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6C7.99965 7.40007 8.36673 8.77571 9.06457 9.98947C9.76241 11.2032 10.7666 12.2126 11.9767 12.9167C13.1868 13.6208 14.5605 13.995 15.9606 14.0019C17.3606 14.0088 18.738 13.6482 19.955 12.956C19.474 18.03 15.2 22 10 22C4.477 22 0 17.523 0 12C0 6.8 3.97 2.526 9.044 2.045C8.35743 3.24988 7.99754 4.61323 8 6ZM2 12C2 14.1217 2.84285 16.1566 4.34315 17.6569C5.84344 19.1571 7.87827 20 10 20C11.4136 20.0005 12.8021 19.6265 14.0241 18.916C15.2462 18.2054 16.2582 17.1838 16.957 15.955C16.6403 15.985 16.3213 16 16 16C10.477 16 6 11.523 6 6C6 5.67933 6.015 5.36033 6.045 5.043C4.81623 5.74185 3.79458 6.75381 3.08404 7.97585C2.37351 9.1979 1.99947 10.5864 2 12ZM16.164 2.291L17 2.5V3.5L16.164 3.709C15.8124 3.79693 15.4913 3.97875 15.235 4.23503C14.9788 4.4913 14.7969 4.8124 14.709 5.164L14.5 6H13.5L13.291 5.164C13.2031 4.8124 13.0212 4.4913 12.765 4.23503C12.5087 3.97875 12.1876 3.79693 11.836 3.709L11 3.5V2.5L11.836 2.291C12.1874 2.20291 12.5083 2.02102 12.7644 1.76475C13.0205 1.50849 13.2021 1.18748 13.29 0.836L13.5 0H14.5L14.709 0.836C14.7969 1.1876 14.9788 1.5087 15.235 1.76497C15.4913 2.02125 15.8124 2.20307 16.164 2.291ZM21.164 7.291L22 7.5V8.5L21.164 8.709C20.8124 8.79693 20.4913 8.97875 20.235 9.23503C19.9788 9.4913 19.7969 9.8124 19.709 10.164L19.5 11H18.5L18.291 10.164C18.2031 9.8124 18.0212 9.4913 17.765 9.23503C17.5087 8.97875 17.1876 8.79693 16.836 8.709L16 8.5V7.5L16.836 7.291C17.1876 7.20307 17.5087 7.02125 17.765 6.76497C18.0212 6.5087 18.2031 6.1876 18.291 5.836L18.5 5H19.5L19.709 5.836C19.7969 6.1876 19.9788 6.5087 20.235 6.76497C20.4913 7.02125 20.8124 7.20307 21.164 7.291Z"
            fill="black"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
