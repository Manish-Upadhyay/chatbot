import { DELETE } from "../actions/actionTypes";
import React from "react";

const initialState = {
  allChatBox: [
    {
      icon: {
        img: (
          <svg
            viewBox="0 0 135 129"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#ffffff" fillRule="nonzero">
              <path d="M86.7343,92.5591 C88.4213,91.0791 90.0853,90.4601 92.3193,90.5121 C98.3993,90.6501 104.4843,90.5831 110.5673,90.5531 C118.0623,90.5161 123.8423,85.5531 124.1803,78.0991 C124.5593,69.7371 124.2673,61.3451 124.2673,52.2431 C121.6553,54.9001 119.4753,57.1381 117.2743,59.3541 C114.8073,61.8371 112.3553,64.3361 109.8363,66.7641 C107.0703,69.4291 104.4503,69.3901 101.7933,66.6331 C97.3413,62.0131 92.8893,57.3901 88.5483,52.6661 C87.3243,51.3341 86.6803,51.1451 85.3333,52.5871 C81.0103,57.2121 76.5223,61.6851 72.0723,66.1911 C69.0273,69.2741 66.5973,69.3011 63.4823,66.3161 C58.6703,61.7021 53.8233,57.1221 49.1093,52.4111 C47.8083,51.1101 47.1843,51.2971 46.0553,52.5661 C42.0143,57.1111 37.8573,61.5541 33.7223,66.0151 C30.6983,69.2791 28.2203,69.3501 24.9763,66.2921 C17.6393,59.3761 10.3363,52.4241 2.9603,45.5501 C0.9293,43.6571 -0.0277,41.5021 0.0233,38.7111 C0.1283,32.9631 0.0243,27.2121 0.0743,21.4621 C0.1773,9.4871 8.8743,0.4921 20.8533,0.4461 C51.8513,0.3281 82.8513,0.3331 113.8503,0.4451 C125.9103,0.4881 134.5623,9.3241 134.6123,21.3991 C134.6913,40.8981 134.6923,60.3981 134.6103,79.8981 C134.5593,91.9931 125.6873,100.8251 113.6003,100.9621 C106.6843,101.0401 99.7663,101.0161 92.8513,100.9471 C91.2513,100.9321 90.0533,101.3851 88.8353,102.4481 C79.4833,110.6111 70.0543,118.6871 60.6843,126.8291 C58.5763,128.6601 56.3303,129.6941 53.6203,128.4541 C50.8543,127.1901 49.9903,124.8301 50.0263,121.9021 C50.1013,115.6531 49.9843,109.4011 50.0903,103.1531 C50.1203,101.4181 49.6793,100.9141 47.9023,100.9341 C39.3203,101.0291 30.7373,100.9871 22.1543,100.9751 C8.8753,100.9541 0.0903,92.1661 0.0663,78.8961 C0.0603,75.3961 0.0583,71.8961 0.0663,68.3961 C0.0733,65.3051 1.6693,63.9821 5.3343,64.0051 C8.9503,64.0291 10.4853,65.3831 10.4863,68.5421 C10.4873,71.5421 10.4413,74.5431 10.5093,77.5411 C10.6753,84.7761 16.3873,90.4881 23.6373,90.5351 C34.6363,90.6071 45.6373,90.6171 56.6363,90.5061 C58.6863,90.4851 59.0863,91.1321 59.0573,93.0201 C58.9433,100.3501 58.9903,107.6831 58.9833,115.0151 C58.9833,115.3161 59.0383,115.6191 59.1153,116.4201 C68.5983,108.2491 77.7183,100.4631 86.7343,92.5591 Z M109.3142,10.6682 C95.4022,10.6622 81.4902,10.6672 67.5782,10.6672 C53.2492,10.6672 38.9212,10.6332 24.5932,10.6802 C16.1142,10.7092 10.5352,16.3382 10.4912,24.7842 C10.4742,28.1992 10.4807703,33.2708227 10.4912,35.0272 C10.5093,38.0193085 11.3572,40.1722 13.4182,42.1062 C18.1552,46.5532 22.9002,50.9922 27.5422,55.5372 C28.7632,56.7332 29.4042,56.5852 30.4682,55.3972 C34.5252,50.8692 38.6692,46.4172 42.8052,41.9592 C45.9782,38.5382 48.3832,38.4542 51.7342,41.6562 C56.4322,46.1452 61.1612,50.6052 65.7482,55.2042 C67.1622,56.6232 67.9482,56.8032 69.4182,55.2302 C73.7412,50.6062 78.2432,46.1512 82.6972,41.6512 C85.7912,38.5252 88.3682,38.5612 91.4452,41.7842 C95.7592,46.3022 100.0882,50.8092 104.3072,55.4172 C105.4982,56.7172 106.1342,57.0032 107.5282,55.5522 C112.4892,50.3852 117.5862,45.3482 122.7182,40.3502 C123.9672,39.1332 124.4442,37.8772 124.3912,36.1682 C124.2842,32.6732 124.3682,29.1722 124.3582,25.6732 C124.3282,16.1102 118.8802,10.6732 109.3142,10.6682 Z"></path>
            </g>
          </svg>
        ),
        backgroundStyle: { background: "#045FFE" }
      },
      status: "",
      title: "Chat Widget",
      about:
        "Customize your own chat widget and place on your website to be in touch with your customers."
    },
    {
      icon: {
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.1 193.1">
            <path
              className="border"
              d="M41.8.7H151.2a40.67,40.67,0,0,1,40.7,40.7V151a40.67,40.67,0,0,1-40.7,40.7H41.8A40.67,40.67,0,0,1,1.1,151V41.3A40.65,40.65,0,0,1,41.8.7Z"
              style={{ fill: "#313131" }}
            ></path>
            <path
              className="background"
              d="M46.3,172.2a25.86,25.86,0,0,1-25.8-25.8V45.9A25.69,25.69,0,0,1,46.2,20.2H146.6A25.86,25.86,0,0,1,172.4,46V146.6a25.86,25.86,0,0,1-25.8,25.8"
              style={{ fill: "#fff" }}
            ></path>
            <polygon
              className="letter"
              points="87.8 127.6 87.8 143.6 35.8 143.6 35.8 49.2 55 49.2 55 127.6 87.8 127.6"
              style={{ fill: "#313131" }}
            ></polygon>
            <path
              className="letter"
              d="M111,98.1a73.49,73.49,0,0,0,.7,8.2c3.2,18.2,16.5,25.7,36.8,21.2,2.1-.5,4.8-3.2,6.5,0a24.34,24.34,0,0,1,3.3,12.7c-.1,1.2-1.6,1.2-2.6,1.5-12.7,3.9-25.4,4.6-38,.1-15.3-5.5-23.2-17.4-26.1-32.8-2.5-13-1.4-25.8,4.7-37.7,7.1-14,18.8-21.2,34.3-22.3a66.35,66.35,0,0,1,22.6,2.1c3.9,1.1,4.6,3.2,3.5,6.6a4.18,4.18,0,0,1-.4,1c-2.5,8.6-2.4,8.6-11.1,6.9C123.8,61.2,111.1,72.8,111,98.1Z"
              style={{ fill: "#d96c2e" }}
            ></path>
          </svg>
        ),
        backgroundStyle: { background: "#f1842f" }
      },
      status: "installed",
      title: "Live Chat",
      about:
        "Connect created scenarios with your LiveChat account. You can take control of any converstation anytime you need."
    },
    {
      icon: {
        img: (
          <svg
            viewBox="0 0 135 129"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#ffffff" fillRule="nonzero">
              <path d="M86.7343,92.5591 C88.4213,91.0791 90.0853,90.4601 92.3193,90.5121 C98.3993,90.6501 104.4843,90.5831 110.5673,90.5531 C118.0623,90.5161 123.8423,85.5531 124.1803,78.0991 C124.5593,69.7371 124.2673,61.3451 124.2673,52.2431 C121.6553,54.9001 119.4753,57.1381 117.2743,59.3541 C114.8073,61.8371 112.3553,64.3361 109.8363,66.7641 C107.0703,69.4291 104.4503,69.3901 101.7933,66.6331 C97.3413,62.0131 92.8893,57.3901 88.5483,52.6661 C87.3243,51.3341 86.6803,51.1451 85.3333,52.5871 C81.0103,57.2121 76.5223,61.6851 72.0723,66.1911 C69.0273,69.2741 66.5973,69.3011 63.4823,66.3161 C58.6703,61.7021 53.8233,57.1221 49.1093,52.4111 C47.8083,51.1101 47.1843,51.2971 46.0553,52.5661 C42.0143,57.1111 37.8573,61.5541 33.7223,66.0151 C30.6983,69.2791 28.2203,69.3501 24.9763,66.2921 C17.6393,59.3761 10.3363,52.4241 2.9603,45.5501 C0.9293,43.6571 -0.0277,41.5021 0.0233,38.7111 C0.1283,32.9631 0.0243,27.2121 0.0743,21.4621 C0.1773,9.4871 8.8743,0.4921 20.8533,0.4461 C51.8513,0.3281 82.8513,0.3331 113.8503,0.4451 C125.9103,0.4881 134.5623,9.3241 134.6123,21.3991 C134.6913,40.8981 134.6923,60.3981 134.6103,79.8981 C134.5593,91.9931 125.6873,100.8251 113.6003,100.9621 C106.6843,101.0401 99.7663,101.0161 92.8513,100.9471 C91.2513,100.9321 90.0533,101.3851 88.8353,102.4481 C79.4833,110.6111 70.0543,118.6871 60.6843,126.8291 C58.5763,128.6601 56.3303,129.6941 53.6203,128.4541 C50.8543,127.1901 49.9903,124.8301 50.0263,121.9021 C50.1013,115.6531 49.9843,109.4011 50.0903,103.1531 C50.1203,101.4181 49.6793,100.9141 47.9023,100.9341 C39.3203,101.0291 30.7373,100.9871 22.1543,100.9751 C8.8753,100.9541 0.0903,92.1661 0.0663,78.8961 C0.0603,75.3961 0.0583,71.8961 0.0663,68.3961 C0.0733,65.3051 1.6693,63.9821 5.3343,64.0051 C8.9503,64.0291 10.4853,65.3831 10.4863,68.5421 C10.4873,71.5421 10.4413,74.5431 10.5093,77.5411 C10.6753,84.7761 16.3873,90.4881 23.6373,90.5351 C34.6363,90.6071 45.6373,90.6171 56.6363,90.5061 C58.6863,90.4851 59.0863,91.1321 59.0573,93.0201 C58.9433,100.3501 58.9903,107.6831 58.9833,115.0151 C58.9833,115.3161 59.0383,115.6191 59.1153,116.4201 C68.5983,108.2491 77.7183,100.4631 86.7343,92.5591 Z M109.3142,10.6682 C95.4022,10.6622 81.4902,10.6672 67.5782,10.6672 C53.2492,10.6672 38.9212,10.6332 24.5932,10.6802 C16.1142,10.7092 10.5352,16.3382 10.4912,24.7842 C10.4742,28.1992 10.4807703,33.2708227 10.4912,35.0272 C10.5093,38.0193085 11.3572,40.1722 13.4182,42.1062 C18.1552,46.5532 22.9002,50.9922 27.5422,55.5372 C28.7632,56.7332 29.4042,56.5852 30.4682,55.3972 C34.5252,50.8692 38.6692,46.4172 42.8052,41.9592 C45.9782,38.5382 48.3832,38.4542 51.7342,41.6562 C56.4322,46.1452 61.1612,50.6052 65.7482,55.2042 C67.1622,56.6232 67.9482,56.8032 69.4182,55.2302 C73.7412,50.6062 78.2432,46.1512 82.6972,41.6512 C85.7912,38.5252 88.3682,38.5612 91.4452,41.7842 C95.7592,46.3022 100.0882,50.8092 104.3072,55.4172 C105.4982,56.7172 106.1342,57.0032 107.5282,55.5522 C112.4892,50.3852 117.5862,45.3482 122.7182,40.3502 C123.9672,39.1332 124.4442,37.8772 124.3912,36.1682 C124.2842,32.6732 124.3682,29.1722 124.3582,25.6732 C124.3282,16.1102 118.8802,10.6732 109.3142,10.6682 Z"></path>
            </g>
          </svg>
        ),
        backgroundStyle: { background: "#045FFE" }
      },
      status: "vote",
      title: "Chat Widget",
      about:
        "Customize your own chat widget and place on your website to be in touch with your customers."
    },
    {
      icon: {
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.1 193.1">
            <path
              className="border"
              d="M41.8.7H151.2a40.67,40.67,0,0,1,40.7,40.7V151a40.67,40.67,0,0,1-40.7,40.7H41.8A40.67,40.67,0,0,1,1.1,151V41.3A40.65,40.65,0,0,1,41.8.7Z"
              style={{ fill: "#313131" }}
            ></path>
            <path
              className="background"
              d="M46.3,172.2a25.86,25.86,0,0,1-25.8-25.8V45.9A25.69,25.69,0,0,1,46.2,20.2H146.6A25.86,25.86,0,0,1,172.4,46V146.6a25.86,25.86,0,0,1-25.8,25.8"
              style={{ fill: "#fff" }}
            ></path>
            <polygon
              className="letter"
              points="87.8 127.6 87.8 143.6 35.8 143.6 35.8 49.2 55 49.2 55 127.6 87.8 127.6"
              style={{ fill: "#313131" }}
            ></polygon>
            <path
              className="letter"
              d="M111,98.1a73.49,73.49,0,0,0,.7,8.2c3.2,18.2,16.5,25.7,36.8,21.2,2.1-.5,4.8-3.2,6.5,0a24.34,24.34,0,0,1,3.3,12.7c-.1,1.2-1.6,1.2-2.6,1.5-12.7,3.9-25.4,4.6-38,.1-15.3-5.5-23.2-17.4-26.1-32.8-2.5-13-1.4-25.8,4.7-37.7,7.1-14,18.8-21.2,34.3-22.3a66.35,66.35,0,0,1,22.6,2.1c3.9,1.1,4.6,3.2,3.5,6.6a4.18,4.18,0,0,1-.4,1c-2.5,8.6-2.4,8.6-11.1,6.9C123.8,61.2,111.1,72.8,111,98.1Z"
              style={{ fill: "#d96c2e" }}
            ></path>
          </svg>
        ),
        backgroundStyle: { background: "#f1842f" }
      },
      status: "",
      title: "Live Chat",
      about:
        "Connect created scenarios with your LiveChat account. You can take control of any converstation anytime you need."
    },
    {
      icon: {
        img: (
          <svg
            viewBox="0 0 135 129"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#ffffff" fillRule="nonzero">
              <path d="M86.7343,92.5591 C88.4213,91.0791 90.0853,90.4601 92.3193,90.5121 C98.3993,90.6501 104.4843,90.5831 110.5673,90.5531 C118.0623,90.5161 123.8423,85.5531 124.1803,78.0991 C124.5593,69.7371 124.2673,61.3451 124.2673,52.2431 C121.6553,54.9001 119.4753,57.1381 117.2743,59.3541 C114.8073,61.8371 112.3553,64.3361 109.8363,66.7641 C107.0703,69.4291 104.4503,69.3901 101.7933,66.6331 C97.3413,62.0131 92.8893,57.3901 88.5483,52.6661 C87.3243,51.3341 86.6803,51.1451 85.3333,52.5871 C81.0103,57.2121 76.5223,61.6851 72.0723,66.1911 C69.0273,69.2741 66.5973,69.3011 63.4823,66.3161 C58.6703,61.7021 53.8233,57.1221 49.1093,52.4111 C47.8083,51.1101 47.1843,51.2971 46.0553,52.5661 C42.0143,57.1111 37.8573,61.5541 33.7223,66.0151 C30.6983,69.2791 28.2203,69.3501 24.9763,66.2921 C17.6393,59.3761 10.3363,52.4241 2.9603,45.5501 C0.9293,43.6571 -0.0277,41.5021 0.0233,38.7111 C0.1283,32.9631 0.0243,27.2121 0.0743,21.4621 C0.1773,9.4871 8.8743,0.4921 20.8533,0.4461 C51.8513,0.3281 82.8513,0.3331 113.8503,0.4451 C125.9103,0.4881 134.5623,9.3241 134.6123,21.3991 C134.6913,40.8981 134.6923,60.3981 134.6103,79.8981 C134.5593,91.9931 125.6873,100.8251 113.6003,100.9621 C106.6843,101.0401 99.7663,101.0161 92.8513,100.9471 C91.2513,100.9321 90.0533,101.3851 88.8353,102.4481 C79.4833,110.6111 70.0543,118.6871 60.6843,126.8291 C58.5763,128.6601 56.3303,129.6941 53.6203,128.4541 C50.8543,127.1901 49.9903,124.8301 50.0263,121.9021 C50.1013,115.6531 49.9843,109.4011 50.0903,103.1531 C50.1203,101.4181 49.6793,100.9141 47.9023,100.9341 C39.3203,101.0291 30.7373,100.9871 22.1543,100.9751 C8.8753,100.9541 0.0903,92.1661 0.0663,78.8961 C0.0603,75.3961 0.0583,71.8961 0.0663,68.3961 C0.0733,65.3051 1.6693,63.9821 5.3343,64.0051 C8.9503,64.0291 10.4853,65.3831 10.4863,68.5421 C10.4873,71.5421 10.4413,74.5431 10.5093,77.5411 C10.6753,84.7761 16.3873,90.4881 23.6373,90.5351 C34.6363,90.6071 45.6373,90.6171 56.6363,90.5061 C58.6863,90.4851 59.0863,91.1321 59.0573,93.0201 C58.9433,100.3501 58.9903,107.6831 58.9833,115.0151 C58.9833,115.3161 59.0383,115.6191 59.1153,116.4201 C68.5983,108.2491 77.7183,100.4631 86.7343,92.5591 Z M109.3142,10.6682 C95.4022,10.6622 81.4902,10.6672 67.5782,10.6672 C53.2492,10.6672 38.9212,10.6332 24.5932,10.6802 C16.1142,10.7092 10.5352,16.3382 10.4912,24.7842 C10.4742,28.1992 10.4807703,33.2708227 10.4912,35.0272 C10.5093,38.0193085 11.3572,40.1722 13.4182,42.1062 C18.1552,46.5532 22.9002,50.9922 27.5422,55.5372 C28.7632,56.7332 29.4042,56.5852 30.4682,55.3972 C34.5252,50.8692 38.6692,46.4172 42.8052,41.9592 C45.9782,38.5382 48.3832,38.4542 51.7342,41.6562 C56.4322,46.1452 61.1612,50.6052 65.7482,55.2042 C67.1622,56.6232 67.9482,56.8032 69.4182,55.2302 C73.7412,50.6062 78.2432,46.1512 82.6972,41.6512 C85.7912,38.5252 88.3682,38.5612 91.4452,41.7842 C95.7592,46.3022 100.0882,50.8092 104.3072,55.4172 C105.4982,56.7172 106.1342,57.0032 107.5282,55.5522 C112.4892,50.3852 117.5862,45.3482 122.7182,40.3502 C123.9672,39.1332 124.4442,37.8772 124.3912,36.1682 C124.2842,32.6732 124.3682,29.1722 124.3582,25.6732 C124.3282,16.1102 118.8802,10.6732 109.3142,10.6682 Z"></path>
            </g>
          </svg>
        ),
        backgroundStyle: { background: "#045FFE" }
      },
      status: "installed",
      title: "Chat Widget",
      about:
        "Customize your own chat widget and place on your website to be in touch with your customers."
    },
    {
      icon: {
        img: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.1 193.1">
            <path
              className="border"
              d="M41.8.7H151.2a40.67,40.67,0,0,1,40.7,40.7V151a40.67,40.67,0,0,1-40.7,40.7H41.8A40.67,40.67,0,0,1,1.1,151V41.3A40.65,40.65,0,0,1,41.8.7Z"
              style={{ fill: "#313131" }}
            ></path>
            <path
              className="background"
              d="M46.3,172.2a25.86,25.86,0,0,1-25.8-25.8V45.9A25.69,25.69,0,0,1,46.2,20.2H146.6A25.86,25.86,0,0,1,172.4,46V146.6a25.86,25.86,0,0,1-25.8,25.8"
              style={{ fill: "#fff" }}
            ></path>
            <polygon
              className="letter"
              points="87.8 127.6 87.8 143.6 35.8 143.6 35.8 49.2 55 49.2 55 127.6 87.8 127.6"
              style={{ fill: "#313131" }}
            ></polygon>
            <path
              className="letter"
              d="M111,98.1a73.49,73.49,0,0,0,.7,8.2c3.2,18.2,16.5,25.7,36.8,21.2,2.1-.5,4.8-3.2,6.5,0a24.34,24.34,0,0,1,3.3,12.7c-.1,1.2-1.6,1.2-2.6,1.5-12.7,3.9-25.4,4.6-38,.1-15.3-5.5-23.2-17.4-26.1-32.8-2.5-13-1.4-25.8,4.7-37.7,7.1-14,18.8-21.2,34.3-22.3a66.35,66.35,0,0,1,22.6,2.1c3.9,1.1,4.6,3.2,3.5,6.6a4.18,4.18,0,0,1-.4,1c-2.5,8.6-2.4,8.6-11.1,6.9C123.8,61.2,111.1,72.8,111,98.1Z"
              style={{ fill: "#d96c2e" }}
            ></path>
          </svg>
        ),
        backgroundStyle: { background: "#f1842f" }
      },
      status: "",
      title: "Live Chat",
      about:
        "Connect created scenarios with your LiveChat account. You can take control of any converstation anytime you need."
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.types) {
    case DELETE:
      return { ...state, allChatBox: state.allChatBox.pop() };

    default:
      return state;
  }
}