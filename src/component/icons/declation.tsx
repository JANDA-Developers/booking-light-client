import { IconSize, JDColor } from '@janda-com/front';
import React, { HTMLAttributes } from 'react';
import { ICSS } from '../../type/interface';
import BasicIcon from './Basic';

export type IIcons =
  | 'PATH'
  | 'menu'
  | 'checkCircle'
  | 'magnifier'
  | 'addCircle'
  | 'jdR'
  | 'jdT'
  | 'jdS'
  | 'jdG'
  | 'store'
  | 'sms'
  | 'shoppingCart'
  | 'historyWatch'
  | 'emptyStart'
  | 'graphPie'
  | 'barGraph'
  | 'circleGraphFill'
  | 'reservation'
  | 'won'
  | 'gear'
  | 'location'
  | 'arrowUp'
  | 'speechBubble'
  | 'recipt'
  | 'gearBox'
  | 'houseGear'
  | 'speechBubble2'
  | 'triWarn'
  | 'diffuser'
  | 'exclamation'
  | 'camera'
  | 'chair'
  | 'vim'
  | 'board'
  | 'wifi'
  | 'shortLeft'
  | 'shortRight'
  | 'arrowRight'
  | 'arrowDown'
  | 'bell'
  | 'share'
  | 'trashCan'
  | 'close'
  | 'fillStar'
  | 'plus'
  | 'search'
  | 'search2'
  | 'arrowBack'
  | 'kakaoTalk'
  | 'link'
  | 'email'
  | 'list'
  | 'doubleBlock'
  | 'threeBlock'
  | 'question'
  | 'point'
  | 'box'
  | 'circleRightArrow'
  | 'help'
  | 'photoFile'
  | 'file'
  | 'reload'
  | 'naver'
  | 'arrow2'
  | 'lightBell'
  | 'copy'
  | 'quoteRight'
  | 'quoteLeft'
  | 'book'
  | 'edit'
  | 'home'
  | 'box2'
  | "pen"
  | 'info'
  | 'letter'
  | 'pay'
  | 'logo'
  | 'bell2'
  | 'newWindow'
  | 'photo'
  | 'checkList'
  | "verticalDots"
  | 'arrowLong';

type TConOrigin = {
  [key: string]: (prop: HTMLAttributes<SVGElement>) => any;
};

const commonStyle: React.CSSProperties = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '1.5px',
};

const shoppingCar: ICSS = {
  ...commonStyle,
  strokeWidth: '0.8px',
}

// quoteRight:
// "M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z",
// quoteLeft:
// "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z",
// graphPie:
// "M19.744 21.158c-2.09 1.77-4.79 2.842-7.744 2.842-6.627 0-12-5.373-12-12 0-6.29 4.842-11.44 11-11.95v12.364l8.744 8.744zm-6.744-19.107c5.046.503 9 4.772 9 9.949 0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744 0-6.29-4.842-11.44-11-11.95v2.001z",
// graphLine:
// "M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z",



export const IConOrigin: TConOrigin = {
  shoppingCart: prop => (
    <svg
      {...prop}
      viewBox="0 0 13.9 12.5">
      <polygon style={shoppingCar} className="cls-1" points="12.3 9.2 4 9.2 2.8 3.4 13.5 3.4 12.3 9.2" />
      <circle style={shoppingCar} className="cls-1" cx={5} cy="11.1" r={1} />
      <circle style={shoppingCar} className="cls-1" cx="11.6" cy="11.1" r={1} />
      <polyline style={shoppingCar} className="cls-1" points="2.8 3.4 2.2 1 0.4 0.4" />
    </svg>
  ),
  verticalDots: prop => (
    <BasicIcon {...prop} path="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
  ),
  PATH: prop => (
    <BasicIcon path="" {...prop} />
  ),
  circleGraphFill: prop => (
    <BasicIcon {...prop} path={"M23.949 13c-.509 6.158-5.66 11-11.949 11-6.627 0-12-5.373-12-12 0-6.29 4.842-11.44 11-11.95v12.95h12.949zm-10.949-2h10.949c-.481-5.828-5.122-10.467-10.949-10.95v10.95z"} />
  ),
  newWindow: prop => (
    <BasicIcon {...prop} path={"M22 6v12h-16v-12h16zm2-6h-20v20h20v-20zm-22 22v-19h-2v21h21v-2h-19z"} />
  ),
  checkCircle: prop => (
    <BasicIcon {...prop} path={"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"} />
  ),
  pen: prop => (
    <BasicIcon {...prop} path={"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"} />
  ),
  link: prop => (
    <BasicIcon {...prop} path={"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"} />
  ),
  logo: prop => (
    <svg {...prop} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 109.5 103" xmlSpace="preserve">
      <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#FFFFFF;}\n" }} />
      <g>
        <path className="st0" d="M4,42.5l16.8-15.3c0,0,30.4,31.1,32,72.1h-15C37.8,99.2,35.5,70.5,4,42.5z" />
        <path className="st0" d="M53.7,91c0,0,11.7-58,51.8-87.2c0,0-37.9,14.7-59.8,58.4C45.7,62.2,52.8,75.6,53.7,91z" />
      </g>
    </svg>
  ),
  sqaureShape: prop => (
    <svg {...prop} version="1.1" id="Layer_1"
      viewBox="0 0 17.9 17">
      <path style={commonStyle} d="M17.1,4.4H0.8C0.3,4.4,0,4.1,0,3.7V0.8C0,0.3,0.3,0,0.8,0h16.4c0.4,0,0.8,0.3,0.8,0.8v2.9
      C17.9,4.1,17.6,4.4,17.1,4.4z M1.5,2.9h14.9V1.5H1.5V2.9z"/>
      <path style={commonStyle} d="M17.1,10.7H0.8C0.3,10.7,0,10.4,0,9.9V7c0-0.4,0.3-0.8,0.8-0.8h16.4c0.4,0,0.8,0.3,0.8,0.8v2.9
      C17.9,10.4,17.6,10.7,17.1,10.7z M1.5,9.2h14.9V7.7H1.5V9.2z"/>
      <path style={commonStyle} d="M17.1,17H0.8C0.3,17,0,16.6,0,16.2v-2.9c0-0.4,0.3-0.8,0.8-0.8h16.4c0.4,0,0.8,0.3,0.8,0.8v2.9
      C17.9,16.6,17.6,17,17.1,17z M1.5,15.5h14.9V14H1.5V15.5z"/>
    </svg>
  ),
  graphLine: prop => (
    <BasicIcon
      {...prop}
      path={
        'M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z'
      }
    />
  ),
  graphPie: prop => (
    <BasicIcon
      {...prop}
      path={
        'M19.744 21.158c-2.09 1.77-4.79 2.842-7.744 2.842-6.627 0-12-5.373-12-12 0-6.29 4.842-11.44 11-11.95v12.364l8.744 8.744zm-6.744-19.107c5.046.503 9 4.772 9 9.949 0 2.397-.85 4.6-2.262 6.324l1.42 1.42c1.77-2.09 2.842-4.79 2.842-7.744 0-6.29-4.842-11.44-11-11.95v2.001z'
      }
    />
  ),
  checkList: prop => (
    <BasicIcon
      {...prop}
      path={
        'M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z'
      }
    />
  ),
  quoteRight: prop => (
    <BasicIcon
      {...prop}
      path={
        'M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z'
      }
    />
  ),
  quoteLeft: prop => (
    <BasicIcon
      {...prop}
      path={
        'M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z'
      }
    />
  ),
  store: prop => (
    <svg {...prop} viewBox="0 0 33.67 31.5">
      <title>store</title>
      <line
        style={commonStyle}
        className="cls-1"
        x1="9.02"
        y1="14.68"
        x2="11.69"
        y2="1.61"
      />
      <path
        style={commonStyle}
        className="cls-1"
        d="M570.58,33.89h.28a4,4,0,0,0,3.75-2.9,4,4,0,0,0,3.76,2.9h.13c4.82,0,4.32-4.8,4.32-4.8l-6.31-11.91H557l-6.31,11.91s-.5,4.8,4.32,4.8h.13a4,4,0,0,0,3.76-2.9,4,4,0,0,0,3.75,2.9h.28a4,4,0,0,0,3.75-2.84S568,34,570.58,33.89Z"
        transform="translate(-549.91 -16.43)"
      />
      <line
        style={commonStyle}
        className="cls-1"
        x1="24.69"
        y1="14.64"
        x2="21.98"
        y2="1.61"
      />
      <line
        style={commonStyle}
        className="cls-1"
        x1="16.76"
        y1="1.02"
        x2="16.76"
        y2="15.15"
      />
      <path
        style={commonStyle}
        className="cls-1"
        d="M580,34.26V45.89a1.29,1.29,0,0,1-1.29,1.29H554.8a1.29,1.29,0,0,1-1.29-1.29V34.26"
        transform="translate(-549.91 -16.43)"
      />
      <rect
        style={commonStyle}
        className="cls-1"
        x="12.42"
        y="21.06"
        width="7.75"
        height="9.69"
      />
    </svg>
  ),
  sms: prop => (
    <svg {...prop} viewBox="0 0 28.29 31.5">
      <title>sms</title>
      <line style={commonStyle} x1="0.75" y1="11.51" x2="27.54" y2="30.75" />
      <line style={commonStyle} x1="27.03" y1="11.51" x2="13.86" y2="20.97" />
      <polyline
        style={commonStyle}
        points="5.44 14.49 5.44 11.51 0.75 11.51 0.75 30.75 27.54 30.75 27.54 11.51 22.85 11.51 22.85 14.49"
      />
      <polyline
        style={commonStyle}
        points="22.85 14.49 22.85 11.51 22.85 0.75 5.44 0.75 5.44 11.51 5.44 14.88"
      />
      <line style={commonStyle} x1="9.24" y1="7.24" x2="18.66" y2="7.24" />
      <line style={commonStyle} x1="9.24" y1="11.7" x2="18.66" y2="11.7" />
    </svg>
  ),
  search2: prop => (
    <svg {...prop} viewBox="0 0 29.75 31.14">
      <title>search</title>
      <path
        style={{
          ...commonStyle,
          strokeWidth: '2px',
        }}
        d="M81.78,91.87a13.85,13.85,0,0,1-1.59.1,12.49,12.49,0,1,1,8.5-3.34"
        transform="translate(-66.71 -65.99)"
      />
      <line style={commonStyle} x1="21.98" y1="22.64" x2="28.75" y2="30.14" />
    </svg>
  ),
  photo: prop => (
    <svg {...prop} viewBox="0 0 33.65 30">
      <title>photo</title>
      <circle
        style={{
          fill: 'currentcolor',
        }}
        cx="16.83"
        cy="16.92"
        r="4.87"
      />
      <path
        style={{
          fill: 'currentcolor',
        }}
        d="M774.08,71H769a3.8,3.8,0,0,0-3.8-3.8h-8.81a3.8,3.8,0,0,0-3.8,3.8h-5.08A3.54,3.54,0,0,0,744,74.52V93.64a3.53,3.53,0,0,0,3.54,3.54h26.57a3.54,3.54,0,0,0,3.54-3.54V74.52A3.55,3.55,0,0,0,774.08,71ZM760.79,91.67a7.57,7.57,0,1,1,7.57-7.57A7.56,7.56,0,0,1,760.79,91.67Zm14-14.52H771.2V73.61h3.54Z"
        transform="translate(-743.97 -67.18)"
      />
    </svg>
  ),
  pay: prop => (
    <svg {...prop} viewBox="0 0 28.85 31.5">
      <title>pay</title>
      <polyline
        style={commonStyle}
        points="7.91 10.99 11.36 21.69 14.81 11.17 17.71 21.69 20.8 11.35"
      />
      <line style={commonStyle} x1="21.7" y1="16.07" x2="7.37" y2="16.07" />
      <path
        style={commonStyle}
        d="M321.83,45.74a13.68,13.68,0,0,1-.4-26.87"
        transform="translate(-309.77 -16.43)"
      />
      <path
        style={commonStyle}
        d="M327.75,19.06a13.68,13.68,0,0,1-1.29,26.7"
        transform="translate(-309.77 -16.43)"
      />
      <polyline style={commonStyle} points="11.21 5.17 13.42 1.96 9.6 0.75" />
      <polyline
        style={commonStyle}
        points="17.7 26.19 15.19 29.18 18.88 30.75"
      />
    </svg>
  ),
  letter: prop => (
    <svg {...prop} viewBox="0 0 33.5 24.97">
      <title>letter</title>
      <rect style={commonStyle} x="0.75" y="0.75" width={32} height="23.47" />
      <line style={commonStyle} x1="5.02" y1="5.02" x2="16.75" y2="12.48" />
      <line style={commonStyle} x1="16.75" y1="12.48" x2="28.48" y2="5.02" />
    </svg>
  ),
  info: prop => (
    <svg {...prop} viewBox="0 0 32 32">
      <title>info</title>
      <path
        style={commonStyle}
        d="M775.79,32.18a15,15,0,1,1-15-15A15,15,0,0,1,775.79,32.18Z"
        transform="translate(-744.79 -16.18)"
      />
      <path
        className="cls-2"
        d="M765.28,23.62A2.32,2.32,0,1,1,763,21.31,2.32,2.32,0,0,1,765.28,23.62Z"
        transform="translate(-744.79 -16.18)"
      />
      <path
        className="cls-2"
        d="M757.88,28.46h6L760.82,40s-.49,1.54.84.28c.91-.86,2.74-2.74,2.74-2.74a8.93,8.93,0,0,1-1.54,2.67,4.56,4.56,0,0,1-2.53,2.1c-2.94.7-3.57-.35-2.59-3.86s2.59-8.62,2.59-8.62h-2.45Z"
        transform="translate(-744.79 -16.18)"
      />
    </svg>
  ),
  home: prop => (
    <svg {...prop} viewBox="0 0 31.83 31.5">
      <title>home</title>
      <path
        style={commonStyle}
        d="M275.69,67.18l-15.17,14v16h12.21V89.81a3,3,0,1,1,5.92,0v7.37h12.2v-16Z"
        transform="translate(-259.77 -66.43)"
      />
    </svg>
  ),
  box2: prop => (
    <svg {...prop} viewBox="0 0 36.08 31.5">
      <title>goods</title>
      <polyline
        style={commonStyle}
        points="3.87 18.1 3.87 23.19 17.82 30.67 31.78 23.19 31.78 8.23 17.82 0.75 3.78 8.26"
      />
      <polyline
        style={commonStyle}
        points="17.82 30.75 17.82 16.19 30.78 8.23"
      />
      <line style={commonStyle} x1="17.82" y1="16.19" x2="3.87" y2="8.23" />
      <polygon
        style={commonStyle}
        points="14.71 23.53 0.75 15.76 3.78 8.26 17.74 16.02 14.71 23.53"
      />
      <line style={commonStyle} x1="17.82" y1="0.75" x2="17.82" y2="14.78" />
      <polyline
        style={commonStyle}
        points="31.82 14.46 35.33 15.75 31.78 8.23"
      />
    </svg>
  ),
  edit: prop => (
    <svg {...prop} viewBox="0 0 29.87 29.87">
      <title>edit</title>
      <path
        style={commonStyle}
        d="M435.41,33.9V30.47L432,29.66a10.79,10.79,0,0,0-1.37-3.3l1.86-3L430,20.94l-3,1.86a10.79,10.79,0,0,0-3.3-1.37L422.93,18H419.5l-.8,3.44a10.79,10.79,0,0,0-3.3,1.37l-3-1.86L410,23.36l1.86,3a11,11,0,0,0-1.36,3.3l-3.44.81V33.9l3.44.8a11,11,0,0,0,1.36,3.3L410,41l2.43,2.43,3-1.86a11,11,0,0,0,3.3,1.36l.8,3.44h3.43l.81-3.44a11,11,0,0,0,3.3-1.36l3,1.86L432.46,41l-1.86-3A10.79,10.79,0,0,0,432,34.7Zm-10.62,1.85a5,5,0,1,1,0-7.14A5,5,0,0,1,424.79,35.75Z"
        transform="translate(-406.28 -17.24)"
      />
    </svg>
  ),
  book: prop => (
    <svg {...prop} viewBox="0 0 33.96 31.5">
      <title>count</title>
      <path
        style={commonStyle}
        d="M46,89.43v4.83a2.87,2.87,0,0,1-2.87,2.87H21.83S17,98.08,17,92V70.05a2.88,2.88,0,0,1,2.87-2.87h23.8a2.87,2.87,0,0,1,2.87,2.87V80.91"
        transform="translate(-16.15 -66.43)"
      />
      <path
        style={commonStyle}
        d="M21.15,74.74h22A2.86,2.86,0,0,1,46,77.61v3.22"
        transform="translate(-16.15 -66.43)"
      />
      <path
        style={commonStyle}
        d="M17,70.05s-.76,4.69,4,4.69"
        transform="translate(-16.15 -66.43)"
      />
      <rect
        style={commonStyle}
        x="19.72"
        y="14.72"
        width="13.49"
        height="8.04"
        rx="2.87"
      />
      <path
        style={commonStyle}
        d="M40.85,85.12a.63.63,0,0,1-.63.62h0a.62.62,0,0,1-.62-.62h0a.62.62,0,0,1,.62-.62h0a.63.63,0,0,1,.63.62Z"
        transform="translate(-16.15 -66.43)"
      />
      <line style={commonStyle} x1="5.62" y1="4.49" x2="24.92" y2="4.49" />
    </svg>
  ),
  copy: prop => (
    <svg {...prop} viewBox="0 0 25.56 31.5">
      <title>copy</title>
      <path
        style={commonStyle}
        d="M427.47,94.15v1.64a1.39,1.39,0,0,1-1.39,1.39h-15.5a1.39,1.39,0,0,1-1.39-1.39V74.35A1.39,1.39,0,0,1,410.58,73h1.51"
        transform="translate(-408.44 -66.43)"
      />
      <path
        style={commonStyle}
        d="M427.81,77.11h-3.09a1.4,1.4,0,0,1-1.39-1.4V67.18h-7a1.4,1.4,0,0,0-1.4,1.4V90a1.4,1.4,0,0,0,1.4,1.39h15.5A1.39,1.39,0,0,0,433.25,90V77.11h-5.44Z"
        transform="translate(-408.44 -66.43)"
      />
      <path
        style={commonStyle}
        d="M432.84,76.7l-9.11-9.11-.4-.41v8.53a1.4,1.4,0,0,0,1.39,1.4h8.53Z"
        transform="translate(-408.44 -66.43)"
      />
    </svg>
  ),
  reload: prop => (
    <svg {...prop} viewBox="0 0 24 24">
      <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
    </svg>
  ),
  bell2: prop => (
    <svg {...prop} viewBox="0 0 29.06 32">
      <title>bell</title>
      <path
        style={commonStyle}
        d="M132.69,21.66V19.72a2.54,2.54,0,1,0-5.08,0v1.94a8.59,8.59,0,0,1,2.54-.39A8.49,8.49,0,0,1,132.69,21.66Z"
        transform="translate(-115.62 -16.18)"
      />
      <path
        style={commonStyle}
        d="M124,42.65a6.5,6.5,0,0,0,12.39,0"
        transform="translate(-115.62 -16.18)"
      />
      <path
        style={commonStyle}
        d="M138.68,34.6V29.8a8.53,8.53,0,1,0-17.05,0v4.8l-5,4.3h27.07Z"
        transform="translate(-115.62 -16.18)"
      />
    </svg>
  ),
  arrow2: prop => (
    <svg {...prop} viewBox="0 0 12.02 21.21">
      <title>arrow_02</title>
      <rect
        className="cls-1"
        x="348.45"
        y="266.66"
        width={2}
        height={15}
        transform="translate(-47.22 -425.76) rotate(45)"
      />
      <rect
        style={{
          fill: 'currentColor',
        }}
        className="cls-1"
        x="348.45"
        y="257.47"
        width={2}
        height={15}
        transform="translate(440.47 -53.72) rotate(135)"
      />
    </svg>
  ),
  arrowLong: prop => (
    <svg
      id="레이어_1"
      data-name="레이어 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.5 18.72"
      {...prop}
    >
      <title>arrow</title>
      <line style={commonStyle} x1="0.75" y1="9.36" x2="30.75" y2="9.36" />
      <line style={commonStyle} x1="22.14" y1="17.97" x2="30.75" y2="9.36" />
      <line style={commonStyle} x1="22.14" y1="0.75" x2="30.75" y2="9.36" />
    </svg>
  ),
  photoFile: prop => (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.06 33.5"
      {...prop}
    >
      <title>Untitled-1</title>
      <polygon
        points="0.75 0.75 0.75 8.27 8.27 0.75 0.75 0.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <polygon
        points="8.27 0.75 0.75 8.27 0.75 32.75 30.31 32.75 30.31 0.75 8.27 0.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <circle
        cx="10.37"
        cy="10.76"
        r="2.34"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <polyline
        points="0.75 25.65 13.27 16.84 19.55 23.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <polyline
        points="17.45 21.45 26.46 14.25 30.31 19.38"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  help: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 24 24'}>
      <g>
        <path
          d={
            'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z'
          }
        />
      </g>
    </svg>
  ),
  camera: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 24 24'}>
      <g>
        <path
          d={
            'M18 5l-2-3h-8l-2 3h-6v17h24v-17h-6zm4 7h-4.079c.581 3.754-2.312 7-5.921 7-3.612 0-6.501-3.248-5.921-7h-4.079v-5h5.07l2-3h5.859l2 3h5.071v5zm-10-3c-2.243 0-4 1.73-4 3.939 0 2.239 1.794 4.061 4 4.061s4-1.822 4-4.061c0-2.209-1.757-3.939-4-3.939zm-.436 3.555c-.632.503-1.461.5-1.852-.006-.39-.506-.194-1.324.438-1.827.632-.502 1.461-.499 1.851.007.391.505.195 1.323-.437 1.826z'
          }
        />
      </g>
    </svg>
  ),
  shortRight: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 24 24'}>
      <g>
        <path d={'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'} />
      </g>
    </svg>
  ),
  shortLeft: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 24 24'}>
      <g>
        <path d={'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'} />
      </g>
    </svg>
  ),
  addCircle: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 24 24'}>
      <g>
        <path
          d={
            'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z'
          }
        />
      </g>
    </svg>
  ),
  magnifier: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 48 48'}>
      <g>
        <path
          d={
            'M47.398,44.368 L37.426,33.885 C40.507,30.173 42.175,25.565 42.161,20.708 C42.144,15.162 39.936,9.953 35.943,6.042 C31.951,2.130 26.663,0.021 21.020,0.003 C15.389,0.019 10.102,2.194 6.132,6.128 C2.163,10.061 -0.015,15.283 0.002,20.829 C0.018,26.376 2.226,31.584 6.219,35.495 C10.208,39.402 15.507,41.537 21.051,41.537 C21.883,41.537 22.721,41.489 23.559,41.392 C24.758,41.253 25.615,40.183 25.474,39.002 C25.333,37.820 24.242,36.973 23.049,37.116 C17.950,37.709 12.937,36.005 9.301,32.442 C6.135,29.342 4.385,25.214 4.372,20.817 C4.360,16.420 6.085,12.281 9.232,9.163 C12.379,6.045 16.569,4.321 21.033,4.308 C25.434,4.292 29.696,5.995 32.862,9.096 C36.027,12.196 37.777,16.324 37.790,20.721 C37.803,25.117 36.077,29.256 32.930,32.374 C32.079,33.217 32.084,34.580 32.939,35.419 C32.995,35.474 33.069,35.495 33.129,35.542 C33.205,35.664 33.254,35.797 33.357,35.905 L44.208,47.313 C44.639,47.765 45.220,47.993 45.804,47.993 C46.339,47.993 46.876,47.800 47.298,47.412 C48.178,46.598 48.223,45.236 47.398,44.368 Z'
          }
        />
      </g>
    </svg>
  ),
  menu: prop => (
    <svg {...prop} {...prop} viewBox={'0 0 60 54'}>
      <g>
        <path
          d={
            'M56.562,6.875 L3.437,6.875 C1.539,6.875 -0.000,5.336 -0.000,3.437 C-0.000,1.539 1.539,-0.000 3.437,-0.000 L56.562,-0.000 C58.461,-0.000 60.000,1.539 60.000,3.437 C60.000,5.336 58.461,6.875 56.562,6.875 ZM3.437,24.062 L32.656,24.062 C34.555,24.062 36.094,25.601 36.094,27.500 C36.094,29.398 34.555,30.937 32.656,30.937 L3.437,30.937 C1.539,30.937 -0.000,29.398 -0.000,27.500 C-0.000,25.601 1.539,24.062 3.437,24.062 ZM43.437,30.937 C41.539,30.937 40.000,29.398 40.000,27.500 C40.000,25.601 41.539,24.062 43.437,24.062 L43.562,24.062 C45.461,24.062 47.000,25.601 47.000,27.500 C47.000,29.398 45.461,30.937 43.562,30.937 L43.437,30.937 ZM3.437,47.125 L56.562,47.125 C58.461,47.125 60.000,48.664 60.000,50.562 C60.000,52.461 58.461,54.000 56.562,54.000 L3.437,54.000 C1.539,54.000 -0.000,52.461 -0.000,50.562 C-0.000,48.664 1.539,47.125 3.437,47.125 Z'
          }
        />
      </g>
    </svg>
  ),
  jdR: prop => (
    <svg
      {...prop}
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 31"
    >
      <title>VectorSmartObject_4548bd61-1050-4b50-a968-19b28bfcbcad</title>
      <path
        d="M45,165.42l-6-6.6a.93.93,0,0,0-1.42,0l-8.09,8.83-6.87,7.52a1.25,1.25,0,0,0,.72,2.1h4.24v10.22"
        transform="translate(-21.25 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M49,187.49V177.27H53.2a1.25,1.25,0,0,0,.72-2.1L50,170.88"
        transform="translate(-21.25 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <polyline
        points="28.75 13.39 28.75 3.51 23.75 3.51 23.75 7.93"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M38.56,180H37.5a1,1,0,0,0-1,1v3.29a1,1,0,0,1-.95.95h-.4a.94.94,0,0,1-1-.95V173.15a.94.94,0,0,1,1-1h4a5.48,5.48,0,0,1,1.79.27,4,4,0,0,1,1.32.73,3.26,3.26,0,0,1,.81,1.13,3.72,3.72,0,0,1,.27,1.43v.67a3.39,3.39,0,0,1-.5,1.84,3,3,0,0,1-.84.89,1,1,0,0,0-.32,1.17l.92,2,.65,1.46a1,1,0,0,1-.86,1.35H42a1,1,0,0,1-.88-.58l-1.69-4A1,1,0,0,0,38.56,180Zm-2-4.89v2a1,1,0,0,0,1,1h1.17a2.88,2.88,0,0,0,1.87-.47,1.55,1.55,0,0,0,.53-1.21v-.54a1.61,1.61,0,0,0-.51-1.23,2.4,2.4,0,0,0-1.69-.48H37.5A1,1,0,0,0,36.55,175.08Z"
        transform="translate(-21.25 -157.49)"
        style={{ fill: 'currentColor' }}
      />
    </svg>
  ),
  jdT: prop => (
    <svg
      {...prop}
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 31.03"
    >
      <title>VectorSmartObject_168a468e-44d8-4978-8eed-b213ef305b22</title>
      <path
        d="M137.86,165.44l-6-6.62a.94.94,0,0,0-1.43,0l-8.11,8.8-6.9,7.49a1.26,1.26,0,0,0,.71,2.11h4.24l0,10.22"
        transform="translate(-114.07 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M141.74,187.52l0-10.21,4.24,0a1.26,1.26,0,0,0,.73-2.11l-3.91-4.29"
        transform="translate(-114.07 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <polyline
        points="28.77 13.44 28.8 3.55 23.8 3.54 23.79 7.95"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M136.06,172.73v.91a.53.53,0,0,1-.53.51h-2.76a.52.52,0,0,0-.52.52l0,10a.52.52,0,0,1-.52.52h-1.27a.52.52,0,0,1-.52-.52l0-10a.52.52,0,0,0-.52-.52h-2.78a.51.51,0,0,1-.51-.52v-.91a.51.51,0,0,1,.52-.51l8.88,0A.52.52,0,0,1,136.06,172.73Z"
        transform="translate(-114.07 -157.49)"
        style={{}}
      />
    </svg>
  ),
  jdS: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 31.03"
    >
      <title>VectorSmartObject_1e2bc969-4992-4e76-85a9-74bed51ca0f2</title>
      <path
        d="M185.86,165.44l-6-6.62a.94.94,0,0,0-1.43,0l-8.11,8.8-6.9,7.49a1.26,1.26,0,0,0,.71,2.11h4.24l0,10.22"
        transform="translate(-162.07 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M189.74,187.52l0-10.21,4.24,0a1.26,1.26,0,0,0,.73-2.11l-3.91-4.29"
        transform="translate(-162.07 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <polyline
        points="28.77 13.44 28.8 3.55 23.8 3.54 23.79 7.95"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M179.57,183.3a2.92,2.92,0,0,0,1.81-.44,1.35,1.35,0,0,0,.56-1.1v-.2a1.31,1.31,0,0,0-.58-1.18,5.26,5.26,0,0,0-1.7-.64l-1.63-.39a4.94,4.94,0,0,1-1.47-.6,3,3,0,0,1-1.07-1.07,3.52,3.52,0,0,1-.41-1.81v-.24a3.53,3.53,0,0,1,.24-1.23,3.25,3.25,0,0,1,.78-1.17,4.11,4.11,0,0,1,1.43-.89,6,6,0,0,1,2.21-.34,9.31,9.31,0,0,1,2.07.23,5.79,5.79,0,0,1,1.41.53.62.62,0,0,1,.25.86l-.46.75a.6.6,0,0,1-.79.22,4.25,4.25,0,0,0-1-.38,6.22,6.22,0,0,0-1.46-.16,3.36,3.36,0,0,0-1.06.14,2.39,2.39,0,0,0-.75.37,1.58,1.58,0,0,0-.44.51,1.1,1.1,0,0,0-.15.54v.21a1.2,1.2,0,0,0,.22.76,1.82,1.82,0,0,0,.6.48,4.39,4.39,0,0,0,.89.31l1.09.24a9.5,9.5,0,0,1,1.93.63,4.76,4.76,0,0,1,1.26.84,2.84,2.84,0,0,1,.68,1,3.53,3.53,0,0,1,.2,1.23v.24a3.82,3.82,0,0,1-.39,1.81,3.12,3.12,0,0,1-1.06,1.16,4.57,4.57,0,0,1-1.53.63,8.86,8.86,0,0,1-1.8.18,7.87,7.87,0,0,1-1.38-.12,9.43,9.43,0,0,1-1.27-.32,8.48,8.48,0,0,1-1.1-.48,6.54,6.54,0,0,1-.89-.59l.78-1.28a.6.6,0,0,1,.84-.19,6.59,6.59,0,0,0,1,.52A5.38,5.38,0,0,0,179.57,183.3Z"
        transform="translate(-162.07 -157.49)"
        style={{}}
      />
    </svg>
  ),
  jdG: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 31.03"
    >
      <title>VectorSmartObject_30f56b14-d171-44c4-b3c5-c478d6c0d760</title>
      <path
        d="M94,165.44l-6-6.62a.94.94,0,0,0-1.43,0l-8.11,8.8-6.9,7.49a1.25,1.25,0,0,0,.7,2.11h4.25l0,10.22"
        transform="translate(-70.24 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M97.91,187.52l0-10.21,4.24,0a1.26,1.26,0,0,0,.72-2.11L99,170.93"
        transform="translate(-70.24 -157.49)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <polyline
        points="28.77 13.44 28.8 3.55 23.8 3.54 23.79 7.95"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      />
      <path
        d="M87.54,172a8.18,8.18,0,0,1,2.29.33,6,6,0,0,1,1.67.8.58.58,0,0,1,.13.82l-.55.78a.59.59,0,0,1-.81.15,3.72,3.72,0,0,0-1.1-.53,5.61,5.61,0,0,0-3-.1,2.61,2.61,0,0,0-1.09.61,3,3,0,0,0-.73,1.22,6.68,6.68,0,0,0-.26,2v1.33a5.19,5.19,0,0,0,.27,1.79,3,3,0,0,0,.74,1.19,2.62,2.62,0,0,0,1.13.66,5.07,5.07,0,0,0,1.45.21,6.39,6.39,0,0,0,1.13-.09,4.86,4.86,0,0,0,1-.28V180.4a.59.59,0,0,0-.59-.6H87.66a.58.58,0,0,1-.59-.59v-.74a.59.59,0,0,1,.6-.59h3.81a.6.6,0,0,1,.6.6l0,5.72a5.52,5.52,0,0,1-1,.51,8.3,8.3,0,0,1-1.13.37c-.4.09-.81.16-1.22.22a8.29,8.29,0,0,1-1.2.07,7.93,7.93,0,0,1-2.29-.31,4.9,4.9,0,0,1-1.83-1,4.53,4.53,0,0,1-1.22-1.7,6.15,6.15,0,0,1-.43-2.48v-2.32a6.7,6.7,0,0,1,.45-2.51,4.75,4.75,0,0,1,1.2-1.74,4.67,4.67,0,0,1,1.83-1A7.75,7.75,0,0,1,87.54,172Z"
        transform="translate(-70.24 -157.49)"
        style={{}}
      />
    </svg>
  ),
  emptyStart: prop => (
    <svg {...prop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.5 32.16">
      <path
        d="M581.82,73.15l3.16,6.4a2.27,2.27,0,0,0,1.73,1.26l7.06,1a2.3,2.3,0,0,1,1.28,3.93l-5.11,5a2.31,2.31,0,0,0-.66,2l1.2,7a2.3,2.3,0,0,1-3.34,2.43l-6.32-3.32a2.26,2.26,0,0,0-2.14,0l-6.32,3.32A2.3,2.3,0,0,1,569,99.83l1.2-7a2.31,2.31,0,0,0-.66-2l-5.11-5a2.3,2.3,0,0,1,1.28-3.93l7.06-1a2.27,2.27,0,0,0,1.73-1.26l3.16-6.4A2.31,2.31,0,0,1,581.82,73.15Z"
        transform="translate(-563 -71.12)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  barGraph: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.5 26.88"
    >
      <title>VectorSmartObject_f88ca520-c005-4834-b4af-968d2eb9cfa8</title>
      <rect
        x="0.75"
        y="0.75"
        width="7.72"
        height="25.38"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <rect
        x="25.03"
        y="15.09"
        width="7.72"
        height="11.03"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <rect
        x="12.89"
        y="7.37"
        width="7.72"
        height="18.76"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  won: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.5 23.57"
    >
      <title>VectorSmartObject_061ac295-a135-45a1-a6e1-b33bf5ea232f</title>
      <line
        x1="2.96"
        y1="0.75"
        x2="10.68"
        y2="22.82"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="10.68"
        y1="22.82"
        x2="16.2"
        y2="5.16"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="16.2"
        y1="5.16"
        x2="22.82"
        y2="22.82"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="22.82"
        y1="22.82"
        x2="29.44"
        y2="0.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="0.75"
        y1="11.78"
        x2="32.75"
        y2="11.78"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  gear: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
    >
      <title>VectorSmartObject_63b72998-2b55-435c-ade2-418692017853</title>
      <path
        d="M488.81,167.56a4.69,4.69,0,1,1-4.7,4.69,4.69,4.69,0,0,1,4.7-4.69m0-2a6.69,6.69,0,1,0,6.69,6.69,6.7,6.7,0,0,0-6.69-6.69Z"
        transform="translate(-475.5 -158.5)"
        style={{}}
      />
      <path
        d="M488.81,160.5a1.41,1.41,0,0,1,1.41,1.42v1.16a1.36,1.36,0,0,1,0,.29,8.9,8.9,0,0,1,3.76,1.5,1.34,1.34,0,0,1,.22-.31l.82-.83a1.4,1.4,0,0,1,1-.41,1.37,1.37,0,0,1,1,.41,1.4,1.4,0,0,1,0,2l-.82.83a1.06,1.06,0,0,1-.26.17,8.94,8.94,0,0,1,1.71,3.69,1.45,1.45,0,0,1,.3,0h1.16a1.42,1.42,0,1,1,0,2.83h-1.33a9,9,0,0,1-1.38,3.91s.05,0,.07,0l.83.82a1.42,1.42,0,0,1-1,2.42,1.38,1.38,0,0,1-1-.42l-.78-.77a8.91,8.91,0,0,1-3.88,1.85v1a1.42,1.42,0,1,1-2.83,0v-.89a9,9,0,0,1-4.13-1.57l-.64.65a1.4,1.4,0,0,1-1,.41,1.37,1.37,0,0,1-1-.41,1.4,1.4,0,0,1,0-2l.61-.62a8.9,8.9,0,0,1-1.7-4h-1a1.42,1.42,0,1,1,0-2.83h1a8.9,8.9,0,0,1,1.67-3.91s0,0-.05,0l-.83-.82a1.42,1.42,0,0,1,1-2.42,1.38,1.38,0,0,1,1,.42l.83.82a.56.56,0,0,1,.05.08,9,9,0,0,1,3.81-1.54,1.36,1.36,0,0,1,0-.29v-1.16a1.41,1.41,0,0,1,1.42-1.42m0-2a3.42,3.42,0,0,0-3.42,3.3,10.79,10.79,0,0,0-1.45.6,3.41,3.41,0,0,0-4.62.19,3.42,3.42,0,0,0-.25,4.56,11.63,11.63,0,0,0-.71,1.67,3.42,3.42,0,0,0,0,6.74,10.69,10.69,0,0,0,.79,1.88,3.42,3.42,0,0,0,4.8,4.66,11.12,11.12,0,0,0,1.94.75,3.42,3.42,0,0,0,6.71-.27,10,10,0,0,0,1.72-.8,3.42,3.42,0,0,0,4.55-5,11.65,11.65,0,0,0,.56-1.53,3.42,3.42,0,0,0-.3-6.82,10.6,10.6,0,0,0-.6-1.33,3.43,3.43,0,0,0-.09-4.74,3.42,3.42,0,0,0-4.83,0l0,0a11,11,0,0,0-1.34-.54,3.42,3.42,0,0,0-3.41-3.3Z"
        transform="translate(-475.5 -158.5)"
        style={{}}
      />
    </svg>
  ),
  location: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200.06 238.34"
    >
      <title>Untitled-1</title>
      <path
        d="M469,415c-32-58-91-57-91-57s-93,0-100,96c-4,42,30,72,30,72l69.66,70.34,77-77S495,479,469,415Zm-91,76a32,32,0,1,1,32-32A32,32,0,0,1,378,491Z"
        transform="translate(-277.67 -358)"
        style={{}}
      />
    </svg>
  ),
  arrowUp: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.79 33.22"
    >
      <title>VectorSmartObject_500b885d-fba7-4086-b193-7c90bf75002b</title>
      <polygon
        points="56.46 33.22 29.89 6.65 3.33 33.22 0 29.9 29.89 0 59.79 29.9 56.46 33.22"
        style={{}}
      />
    </svg>
  ),
  speechBubble: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 57.37"
    >
      <title>VectorSmartObject_fa2f7063-e023-4b72-a306-23c3232165c5</title>
      <path
        d="M864.08,204.63h-32a1.37,1.37,0,1,1,0-2.74h32a1.37,1.37,0,1,1,0,2.74Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
      <path
        d="M871.31,204.63h-2.9a1.37,1.37,0,1,1,0-2.74h2.9a1.37,1.37,0,0,1,0,2.74Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
      <path
        d="M857.27,214.32H831.91a1.37,1.37,0,0,1,0-2.74h25.36a1.37,1.37,0,1,1,0,2.74Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
      <path
        d="M871.31,214.32h-9.84a1.37,1.37,0,0,1,0-2.74h9.84a1.37,1.37,0,1,1,0,2.74Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
      <path
        d="M859.37,224.28H831.91a1.37,1.37,0,1,1,0-2.74h27.46a1.37,1.37,0,0,1,0,2.74Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
      <path
        d="M822.92,248.88a1.36,1.36,0,0,1-1.37-1.37V198.33a6.83,6.83,0,0,1,6.82-6.82h51.81a1.37,1.37,0,0,1,1.37,1.37v36.37a6.84,6.84,0,0,1-6.68,6.81H833.55L824,248.35A1.39,1.39,0,0,1,822.92,248.88Zm5.45-54.63a4.08,4.08,0,0,0-4.07,4.08v45.18l7.5-9.66a1.35,1.35,0,0,1,1.08-.53h41.93a4.1,4.1,0,0,0,4-4.07v-35Z"
        transform="translate(-821.55 -191.51)"
        style={{}}
      />
    </svg>
  ),
  recipt: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 38.31"
    >
      <title>VectorSmartObject_2f1e31e9-b3a6-487b-a5f2-497f3c64b3ed</title>
      <path
        d="M850.74,149.89H805.9a1.38,1.38,0,0,1-1.38-1.39V113a1.38,1.38,0,0,1,1.38-1.38h4a1.38,1.38,0,0,1,1.39,1.38,3.47,3.47,0,1,0,6.93,0,1.38,1.38,0,0,1,1.38-1.38h4.05a1.38,1.38,0,0,1,1.38,1.38,3.47,3.47,0,1,0,6.93,0,1.38,1.38,0,0,1,1.38-1.38h4a1.38,1.38,0,0,1,1.38,1.38,3.47,3.47,0,1,0,6.93,0,1.38,1.38,0,0,1,1.39-1.38h3.61a1.38,1.38,0,0,1,1.38,1.38V148.5A1.38,1.38,0,0,1,850.74,149.89Zm-43.45-2.77h42.06V114.35h-1a6.24,6.24,0,0,1-12.16,0h-1.59a6.23,6.23,0,0,1-12.15,0h-1.59a6.24,6.24,0,0,1-12.16,0h-1.42Z"
        transform="translate(-798.32 -111.58)"
        style={{}}
      />
      <path
        d="M856.94,149.89H799.7a1.39,1.39,0,0,1,0-2.77h57.24a1.39,1.39,0,0,1,0,2.77Z"
        transform="translate(-798.32 -111.58)"
        style={{}}
      />
      <path
        d="M831.92,130.76H813a1.38,1.38,0,1,1,0-2.76h18.92a1.38,1.38,0,0,1,0,2.76Z"
        transform="translate(-798.32 -111.58)"
        style={{}}
      />
      <path
        d="M842,139.6H813a1.39,1.39,0,1,1,0-2.77h29a1.39,1.39,0,0,1,0,2.77Z"
        transform="translate(-798.32 -111.58)"
        style={{}}
      />
    </svg>
  ),
  gearBox: prop => (
    <svg
      {...prop}
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 48.19"
    >
      <title>VectorSmartObject_f36a0836-797f-4c61-a28a-45daed203f40</title>
      <path
        d="M745.94,204.54a1.29,1.29,0,0,1-.54-.12l-7.4-3.29a1.35,1.35,0,1,1,1.09-2.46l5.53,2.46.31-24L724.21,168l-.06,4.79a1.34,1.34,0,0,1-1.34,1.32h0a1.33,1.33,0,0,1-1.33-1.36l.09-6.83a1.3,1.3,0,0,1,.62-1.11,1.33,1.33,0,0,1,1.27-.1l23.4,10.39a1.35,1.35,0,0,1,.8,1.25l-.35,26.89a1.32,1.32,0,0,1-.62,1.11A1.36,1.36,0,0,1,745.94,204.54Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M745.94,204.54a1.36,1.36,0,0,1-1.34-1.37l.35-26.89a1.34,1.34,0,0,1,.83-1.23l23.66-9.78a1.37,1.37,0,0,1,1.27.13,1.38,1.38,0,0,1,.59,1.14L771,193.43a1.34,1.34,0,0,1-.83,1.22l-23.66,9.78A1.35,1.35,0,0,1,745.94,204.54Zm1.69-27.34-.31,24,20.95-8.66.31-24Zm22,16.21h0Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M746.29,177.65a1.37,1.37,0,0,1-.55-.12l-23.39-10.39a1.35,1.35,0,0,1,.1-2.5l23.49-8.22a1.38,1.38,0,0,1,.92,0l23.42,8.7a1.35,1.35,0,0,1,.05,2.51l-23.52,9.9A1.31,1.31,0,0,1,746.29,177.65Zm-19.74-11.59,19.76,8.77,19.85-8.35-19.78-7.36Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M756.57,172.47a1.24,1.24,0,0,1-.54-.11l-21.66-9.42a1.35,1.35,0,1,1,1.07-2.47l21.66,9.42a1.35,1.35,0,0,1-.53,2.58Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M758,186.2a1.35,1.35,0,0,1-1.35-1.35v-12.6a1.35,1.35,0,0,1,2.7,0v12.6A1.35,1.35,0,0,1,758,186.2Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M725.12,186a3.84,3.84,0,1,1-3.84,3.84,3.84,3.84,0,0,1,3.84-3.84m0-2.69a6.53,6.53,0,1,0,6.54,6.53,6.54,6.54,0,0,0-6.54-6.53Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
      <path
        d="M725.12,178.27a1.4,1.4,0,0,1,1.4,1.4v1.15a1.33,1.33,0,0,1,0,.28,8.73,8.73,0,0,1,3.7,1.48,1.3,1.3,0,0,1,.21-.31l.81-.82a1.4,1.4,0,0,1,2,2l-.82.81a1.67,1.67,0,0,1-.26.17A8.79,8.79,0,0,1,733.8,188a1.43,1.43,0,0,1,.29,0h1.15a1.4,1.4,0,1,1,0,2.79h-1.15l-.16,0a8.8,8.8,0,0,1-1.36,3.85l.07.05.82.81a1.4,1.4,0,0,1-2,2l-.76-.76a8.79,8.79,0,0,1-3.82,1.81v1a1.4,1.4,0,1,1-2.79,0v-.88a8.74,8.74,0,0,1-4.06-1.54l-.63.64a1.42,1.42,0,0,1-1,.41,1.4,1.4,0,0,1-1-2.38l.61-.61a8.86,8.86,0,0,1-1.68-4h-1a1.4,1.4,0,1,1,0-2.79h1a8.74,8.74,0,0,1,1.64-3.85l0,0-.81-.81a1.41,1.41,0,0,1,0-2,1.39,1.39,0,0,1,1-.4,1.37,1.37,0,0,1,1,.4l.82.82,0,.07a8.74,8.74,0,0,1,3.75-1.51,1.33,1.33,0,0,1,0-.28v-1.15a1.4,1.4,0,0,1,1.39-1.4m0-2.69a4.1,4.1,0,0,0-4,3.44l-.67.28a4.09,4.09,0,0,0-5.71,5.59,10.25,10.25,0,0,0-.41,1,4.09,4.09,0,0,0,0,7.86,11,11,0,0,0,.51,1.23,4.09,4.09,0,0,0,5.59,5.42,10.06,10.06,0,0,0,1.29.49,4.09,4.09,0,0,0,7.82-.3c.36-.14.7-.31,1-.48a4.18,4.18,0,0,0,2,.5,4.09,4.09,0,0,0,3.37-6.41c.1-.25.19-.5.27-.76a4.09,4.09,0,0,0-.34-8.05c-.08-.18-.16-.36-.25-.53a4.09,4.09,0,0,0-5.85-5.59l-.51-.21a4.09,4.09,0,0,0-4-3.44Z"
        transform="translate(-711.3 -156.34)"
        style={{}}
      />
    </svg>
  ),
  houseGear: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 55.82"
    >
      <title>VectorSmartObject_927f429e-97eb-4d27-bfa3-7d273babd699</title>
      <path
        d="M628,172a1.35,1.35,0,0,1-1-2.25l19-20.66a3.12,3.12,0,0,1,2.27-1,3.07,3.07,0,0,1,2.26,1l10.72,11.81a1.34,1.34,0,1,1-2,1.8l-10.73-11.81a.4.4,0,0,0-.28-.16h0a.43.43,0,0,0-.29.15l-19,20.67A1.34,1.34,0,0,1,628,172Z"
        transform="translate(-618.13 -148.03)"
        style={{}}
      />
      <path
        d="M667.27,202.51h0a1.33,1.33,0,0,1-1.33-1.34l.06-18.23a1.33,1.33,0,0,1,1.35-1.33l7.57,0h0c.23,0,.37-.24.43-.38a1.07,1.07,0,0,0-.14-1.14l-7-7.67a1.33,1.33,0,0,1,.09-1.89,1.35,1.35,0,0,1,1.89.09l7,7.67a3.73,3.73,0,0,1,.61,4,3.16,3.16,0,0,1-2.88,2h0l-6.24,0-.06,16.89A1.34,1.34,0,0,1,667.27,202.51Z"
        transform="translate(-618.13 -148.03)"
        style={{}}
      />
      <path
        d="M669.24,172.89h0a1.33,1.33,0,0,1-1.33-1.34l.06-16.3-6.25,0,0,6.54a1.34,1.34,0,0,1-1.34,1.34h0a1.36,1.36,0,0,1-1.34-1.35l0-7.88a1.35,1.35,0,0,1,1.34-1.33h0l8.92,0a1.3,1.3,0,0,1,.94.4,1.33,1.33,0,0,1,.39.94l-.06,17.64A1.34,1.34,0,0,1,669.24,172.89Z"
        transform="translate(-618.13 -148.03)"
        style={{}}
      />
      <path
        d="M633.41,184.29a4.35,4.35,0,1,1-4.35,4.35,4.34,4.34,0,0,1,4.35-4.35m0-2.68a7,7,0,1,0,7,7,7,7,0,0,0-7-7Z"
        transform="translate(-618.13 -148.03)"
        style={{}}
      />
      <path
        d="M633.41,175.54a1.57,1.57,0,0,1,1.57,1.58v1.3a1.66,1.66,0,0,1,0,.32,9.91,9.91,0,0,1,4.19,1.68,1.41,1.41,0,0,1,.24-.36l.92-.92a1.58,1.58,0,0,1,2.23,0,1.58,1.58,0,0,1,0,2.24l-.92.92a1.81,1.81,0,0,1-.29.19,10.09,10.09,0,0,1,1.91,4.11,1.66,1.66,0,0,1,.33,0h1.3a1.58,1.58,0,1,1,0,3.16h-1.3l-.18,0a9.92,9.92,0,0,1-1.55,4.36l.09.05.92.92a1.6,1.6,0,0,1,0,2.24,1.59,1.59,0,0,1-2.24,0l-.86-.86a10,10,0,0,1-4.32,2.05v1.13a1.58,1.58,0,1,1-3.16,0v-1a9.91,9.91,0,0,1-4.59-1.74l-.72.72a1.58,1.58,0,0,1-2.24-2.23l.69-.68a10,10,0,0,1-1.9-4.51h-1.11a1.58,1.58,0,1,1,0-3.15h1.13a10,10,0,0,1,1.86-4.36s0,0,0,0l-.92-.92a1.58,1.58,0,0,1,2.23-2.23l.92.92s0,.06.06.09a9.87,9.87,0,0,1,4.24-1.72,1.66,1.66,0,0,1,0-.32v-1.3a1.58,1.58,0,0,1,1.58-1.58m0-2.67a4.26,4.26,0,0,0-4.24,3.8,12.16,12.16,0,0,0-1.13.46,4.27,4.27,0,0,0-2.52-.82,4.27,4.27,0,0,0-4.25,4.26A4.27,4.27,0,0,0,622,183a12,12,0,0,0-.6,1.43,4.25,4.25,0,0,0,0,8.28,13.33,13.33,0,0,0,.72,1.7,4.26,4.26,0,0,0,3.73,6.3,4.17,4.17,0,0,0,2.16-.59,12.2,12.2,0,0,0,1.77.68,4.25,4.25,0,0,0,8.24-.32,12,12,0,0,0,1.5-.7,4.18,4.18,0,0,0,2.22.62,4.25,4.25,0,0,0,3.39-6.83,12.88,12.88,0,0,0,.45-1.23,4.26,4.26,0,0,0-.37-8.44,8.83,8.83,0,0,0-.45-1,4.25,4.25,0,0,0-6.13-5.85,8.93,8.93,0,0,0-1-.39,4.26,4.26,0,0,0-4.23-3.8Z"
        transform="translate(-618.13 -148.03)"
        style={{}}
      />
    </svg>
  ),
  speechBubble2: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <title>VectorSmartObject_17054da0-2c9b-4715-b8a3-8eb34b641347</title>
      <path
        d="M49.49,81.87a3.69,3.69,0,0,0-3.69,3.69v2.88a3.69,3.69,0,1,0,7.37,0V85.56A3.69,3.69,0,0,0,49.49,81.87Z"
        transform="translate(-10.89 -56.87)"
        style={{}}
      />
      <path
        d="M31.61,81.89a3.86,3.86,0,0,0-3.36,3.93v2.36a3.87,3.87,0,0,0,3.36,3.94,3.69,3.69,0,0,0,4-3.68V85.56A3.69,3.69,0,0,0,31.61,81.89Z"
        transform="translate(-10.89 -56.87)"
        style={{}}
      />
      <path
        d="M40.65,116.87a20.25,20.25,0,0,1-2.28-.13,30,30,0,0,1-27-24.5c-.13-.67-.23-1.36-.31-2.06L11,89.53c-.08-.81-.12-1.64-.13-2.49v-.3c0-.58,0-1.24.06-1.91,0-.12,0-.24,0-.37.06-.62.12-1.07.18-1.52s.14-1,.23-1.49.2-1,.32-1.51.18-.76.29-1.13c.17-.61.36-1.22.57-1.82l.23-.63c.28-.74.58-1.47.92-2.19a29.87,29.87,0,0,1,19.94-16.4l.22-.06.46-.11c.55-.12,1.11-.22,1.67-.31s.9-.15,1.31-.2.84-.08,1.26-.11l.47,0,.67-.06h.72a13.37,13.37,0,0,1,1.55,0l.83.05c.23,0,.47,0,.71,0a30,30,0,0,1,21.8,47.21c3.21,7.53,3.21,7.54,3.21,7.81a1.37,1.37,0,0,1-.39,1c-1.11,1.1-4.83.82-11-.87A30,30,0,0,1,40.65,116.87ZM13.58,87c0,.77.05,1.52.11,2.26l.06.59c.07.63.16,1.25.28,1.87a27.31,27.31,0,0,0,24.59,22.32,20.11,20.11,0,0,0,2.25.11,27.18,27.18,0,0,0,15.26-4.65,1.36,1.36,0,0,1,1.11-.18,37.59,37.59,0,0,0,8.05,1.59c-1-2.33-2.71-6.35-2.71-6.35a1.33,1.33,0,0,1,.16-1.33l.15-.23.15-.23A27.27,27.27,0,0,0,43.3,59.67c-.19,0-.38,0-.58,0l-.9,0c-.31,0-.62,0-.93,0l-.59,0H40l-.63,0-.43,0c-.51,0-.88.06-1.26.11s-.73.1-1.1.17c-.61.1-1.12.18-1.62.29l-.6.16A27.18,27.18,0,0,0,16.18,75.27c-.32.69-.6,1.36-.86,2l-.2.57c-.19.54-.37,1.09-.52,1.65-.1.35-.18.69-.27,1s-.21.91-.29,1.38-.15.9-.21,1.35-.1.82-.14,1.24l-.06.48q-.06.92-.06,1.8L12.24,87Zm53,23.83ZM49.49,93.47a5,5,0,0,1-5-5V85.56a5,5,0,1,1,10,0v2.88A5,5,0,0,1,49.49,93.47Zm0-10.25a2.35,2.35,0,0,0-2.35,2.34v2.88a2.35,2.35,0,1,0,4.69,0V85.56A2.34,2.34,0,0,0,49.49,83.22ZM31.94,93.47a5,5,0,0,1-5-5V85.56a5,5,0,1,1,10.06,0v2.88A5,5,0,0,1,31.94,93.47Zm0-10.25a2.34,2.34,0,0,0-2.34,2.34v2.88a2.34,2.34,0,1,0,4.68,0V85.56A2.34,2.34,0,0,0,31.94,83.22Z"
        transform="translate(-10.89 -56.87)"
        style={{}}
      />
    </svg>
  ),
  triWarn: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 53.41"
    >
      <title>VectorSmartObject_23a64a79-a223-4ba7-8b05-0d993eee2317</title>
      <path
        d="M557.39,67.63h-49a5.48,5.48,0,0,1-4.74-8.22L528.13,17h0a5.48,5.48,0,0,1,9.49,0l24.51,42.46a5.48,5.48,0,0,1-4.74,8.22ZM530.46,18.29,506,60.75a2.8,2.8,0,0,0,2.41,4.19h49a2.8,2.8,0,0,0,2.42-4.19L535.29,18.29a2.79,2.79,0,0,0-4.83,0Z"
        transform="translate(-502.88 -14.21)"
        style={{}}
      />
      <path
        d="M532.88,53.79a2.36,2.36,0,1,1-1.7.69A2.31,2.31,0,0,1,532.88,53.79Zm0-20.06a2.74,2.74,0,0,1,1.61.44,1.61,1.61,0,0,1,.58,1.47L534.57,50a1.59,1.59,0,0,1-.55,1.34,1.84,1.84,0,0,1-1.14.38,1.87,1.87,0,0,1-1.15-.38,1.62,1.62,0,0,1-.55-1.34l-.5-14.33a1.61,1.61,0,0,1,.58-1.47A2.75,2.75,0,0,1,532.88,33.73Z"
        transform="translate(-502.88 -14.21)"
        style={{}}
      />
    </svg>
  ),
  diffuser: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 46.06"
    >
      <title>VectorSmartObject_88a1c67e-51e6-4ea2-a93d-b484e22ef849</title>
      <path
        d="M449.66,106.57a1.24,1.24,0,0,1-.5-.1l-28.3-11.26A1.36,1.36,0,0,1,420,94V78.19a1.34,1.34,0,0,1,.94-1.28l28.3-9a1.35,1.35,0,0,1,1.2.19,1.34,1.34,0,0,1,.55,1.09v36.05a1.34,1.34,0,0,1-1.34,1.34Zm-27-13.52,25.61,10.19V71L422.7,79.17Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M421.35,95.3h-6.76A1.34,1.34,0,0,1,413.25,94V78.19a1.34,1.34,0,0,1,1.34-1.34h6.76a1.35,1.35,0,0,1,1.35,1.34V94A1.35,1.35,0,0,1,421.35,95.3Zm-5.41-2.68H420V79.53h-4.07Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M456.42,109.38h-6.76a1.35,1.35,0,0,1-1.35-1.34V66.36A1.35,1.35,0,0,1,449.66,65h6.76a1.34,1.34,0,0,1,1.34,1.34V108A1.34,1.34,0,0,1,456.42,109.38ZM451,106.7h4.07v-39H451Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M430.36,111.07h-4.5a1.34,1.34,0,0,1-1.34-1.34V96.21a1.34,1.34,0,0,1,2-1.15l4.22,2.54a1.33,1.33,0,0,1,.66,1.11l.28,11a1.33,1.33,0,0,1-1.35,1.37Zm-3.16-2.68H429l-.23-8.87-1.56-.93Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M471.91,87.7H461.06a1.35,1.35,0,0,1,0-2.69h10.85a1.35,1.35,0,0,1,0,2.69Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M461.06,81.5A1.34,1.34,0,0,1,460.4,79l10.84-6.19a1.34,1.34,0,1,1,1.33,2.33l-10.84,6.2A1.34,1.34,0,0,1,461.06,81.5Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
      <path
        d="M471.91,100.09a1.35,1.35,0,0,1-.67-.18L460.4,93.72a1.34,1.34,0,1,1,1.33-2.33l10.84,6.19a1.34,1.34,0,0,1-.66,2.51Z"
        transform="translate(-413.25 -65.02)"
        style={{}}
      />
    </svg>
  ),
  exclamation: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <title>VectorSmartObject_e4390001-4b1d-41f5-8992-e9ea899d9144</title>
      <path
        d="M578.94,51.05a2.85,2.85,0,0,1,2.1.85,3,3,0,0,1,0,4.2,3,3,0,1,1-2.1-5.05Zm0-24.86a3.38,3.38,0,0,1,2,.55,2,2,0,0,1,.72,1.82L581,46.31a2.06,2.06,0,0,1-.68,1.67,2.38,2.38,0,0,1-2.84,0,2,2,0,0,1-.68-1.67l-.62-17.75a2,2,0,0,1,.72-1.82A3.36,3.36,0,0,1,578.94,26.19Z"
        transform="translate(-548.94 -11.57)"
        style={{}}
      />
      <path
        d="M578.94,71.57a30,30,0,1,1,30-30A30,30,0,0,1,578.94,71.57Zm0-57.31a27.32,27.32,0,1,0,27.31,27.31A27.35,27.35,0,0,0,578.94,14.26Z"
        transform="translate(-548.94 -11.57)"
        style={{}}
      />
    </svg>
  ),
  chair: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48.1 60"
    >
      <title>VectorSmartObject_ff49114a-ec2b-4670-b07a-76cce05028ce</title>
      <path
        d="M281,76.66H246a1.34,1.34,0,0,1-1.34-1.35V66.58A1.34,1.34,0,0,1,246,65.24H281a1.34,1.34,0,0,1,1.34,1.34v8.73A1.34,1.34,0,0,1,281,76.66ZM247.38,74h32.24v-6H247.38Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M263.5,99a80.57,80.57,0,0,1-23.13-3.57,1.33,1.33,0,0,1-.8-.72,1.31,1.31,0,0,1,0-1.08l5.24-12.23a1.32,1.32,0,0,1,.77-.73,1.39,1.39,0,0,1,1.06.06,41.7,41.7,0,0,0,16.87,3.35,41.21,41.21,0,0,0,16.87-3.35,1.31,1.31,0,0,1,1.06-.06,1.32,1.32,0,0,1,.77.73l5.24,12.23a1.31,1.31,0,0,1,0,1.08,1.33,1.33,0,0,1-.8.72A80.57,80.57,0,0,1,263.5,99Zm-20.88-5.69a74.16,74.16,0,0,0,41.76,0l-4.11-9.6a47.48,47.48,0,0,1-33.54,0Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M246,84.34A1.34,1.34,0,0,1,244.69,83V59.59a1.35,1.35,0,0,1,2.69,0V83A1.35,1.35,0,0,1,246,84.34Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M247.78,60.94h-3.49a1.35,1.35,0,1,1,0-2.69h3.49a1.35,1.35,0,0,1,0,2.69Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M281,84.34A1.35,1.35,0,0,1,279.62,83V59.59a1.35,1.35,0,0,1,2.69,0V83A1.34,1.34,0,0,1,281,84.34Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M282.71,60.94h-3.49a1.35,1.35,0,0,1,0-2.69h3.49a1.35,1.35,0,1,1,0,2.69Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M281,118.25a1.38,1.38,0,0,1-.66-.17L240.13,95.37a1.36,1.36,0,0,1-.51-1.83,1.34,1.34,0,0,1,1.83-.51l40.18,22.71a1.34,1.34,0,0,1-.66,2.51Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M284.46,118.25h-8.73a1.35,1.35,0,1,1,0-2.69h8.73a1.35,1.35,0,0,1,0,2.69Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M246,118.25a1.34,1.34,0,0,1-.66-2.51L285.55,93a1.34,1.34,0,0,1,1.83.51,1.36,1.36,0,0,1-.51,1.83l-40.18,22.71A1.38,1.38,0,0,1,246,118.25Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
      <path
        d="M251.27,118.25h-8.73a1.35,1.35,0,0,1,0-2.69h8.73a1.35,1.35,0,1,1,0,2.69Z"
        transform="translate(-239.45 -58.25)"
        style={{}}
      />
    </svg>
  ),
  vim: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 33.03"
    >
      <title>VectorSmartObject_2ec30cfa-dfdc-415e-915a-748a3d56af0b</title>
      <path
        d="M169.76,104.51H159.64a1.34,1.34,0,0,1-1.34-1.34V99.8a1.34,1.34,0,0,1,1.34-1.34h10.12a1.34,1.34,0,0,1,1.34,1.34v3.37A1.34,1.34,0,0,1,169.76,104.51ZM161,101.83h7.42v-.69H161Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M193.36,104.51H183.24a1.34,1.34,0,0,1-1.34-1.34V99.8a1.34,1.34,0,0,1,1.34-1.34h10.12a1.34,1.34,0,0,1,1.34,1.34v3.37A1.34,1.34,0,0,1,193.36,104.51Zm-8.77-2.68H192v-.69h-7.42Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M194.2,101.14H158.8a12.3,12.3,0,0,1-.15-24.59,1.38,1.38,0,0,1,1.14.6,1.35,1.35,0,0,1,.11,1.28,7,7,0,0,0-.6,2.83,7.09,7.09,0,1,0,13.57-2.84,1.35,1.35,0,0,1,1.23-1.88h20.1a12.3,12.3,0,1,1,0,24.6ZM156.78,79.45a9.61,9.61,0,0,0,2,19h35.4a9.62,9.62,0,0,0,0-19.23H175.94a9.15,9.15,0,0,1,.22,2,9.78,9.78,0,0,1-19.55,0A9.91,9.91,0,0,1,156.78,79.45Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M174.1,79.23a1.34,1.34,0,0,1-1.23-.81,7.07,7.07,0,0,0-12.8-.35,1.27,1.27,0,0,1-1.27,1.16,1.49,1.49,0,0,1-1.19-.6,1.36,1.36,0,0,1-.18-1.27,9.76,9.76,0,0,1,17.9,0,1.34,1.34,0,0,1-.69,1.77A1.45,1.45,0,0,1,174.1,79.23Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M170.13,77.89a5,5,0,1,0,1.31,3.37A5,5,0,0,0,170.13,77.89Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M195,87.66h-8.43a1.35,1.35,0,0,1,0-2.69H195a1.35,1.35,0,1,1,0,2.69Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
      <path
        d="M195,92.71H181.56a1.34,1.34,0,1,1,0-2.68H195a1.34,1.34,0,1,1,0,2.68Z"
        transform="translate(-146.5 -71.49)"
        style={{}}
      />
    </svg>
  ),
  board: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 48.92"
    >
      <title>VectorSmartObject_f6d8565d-c211-40d4-81d4-8638d9a7efed</title>
      <path
        d="M337.87,99.79H280.63a1.38,1.38,0,0,1-1.38-1.39V65.17a1.38,1.38,0,0,1,1.38-1.38h57.24a1.38,1.38,0,0,1,1.38,1.38V98.4A1.38,1.38,0,0,1,337.87,99.79ZM282,97h54.46V66.56H282Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M288,112.71a1.38,1.38,0,0,1-1.39-1.38V98.4a1.39,1.39,0,0,1,2.77,0v12.93A1.38,1.38,0,0,1,288,112.71Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M330.48,112.71a1.38,1.38,0,0,1-1.38-1.38V98.4a1.39,1.39,0,0,1,2.77,0v12.93A1.38,1.38,0,0,1,330.48,112.71Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M295.4,112.71H280.63a1.39,1.39,0,0,1,0-2.77H295.4a1.39,1.39,0,1,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M337.87,112.71H323.1a1.39,1.39,0,1,1,0-2.77h14.77a1.39,1.39,0,0,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M308.33,75.79H288A1.39,1.39,0,1,1,288,73h20.31a1.39,1.39,0,0,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M330.48,75.79H313.87a1.39,1.39,0,1,1,0-2.77h16.61a1.39,1.39,0,1,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M319.4,81.33H288a1.39,1.39,0,1,1,0-2.77H319.4a1.39,1.39,0,1,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M315.71,86.87H288a1.39,1.39,0,1,1,0-2.77h27.69a1.39,1.39,0,1,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
      <path
        d="M328.63,92.4H288a1.39,1.39,0,1,1,0-2.77h40.61a1.39,1.39,0,1,1,0,2.77Z"
        transform="translate(-279.25 -63.79)"
        style={{}}
      />
    </svg>
  ),
  wifi: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 44.57"
    >
      <title>VectorSmartObject_135d3266-ee9b-446f-b84d-caa9db3c8e0f</title>
      <circle cx={30} cy="39.17" r="5.4" style={{}} />
      <path
        d="M248.66,80.4a1.34,1.34,0,0,1-.95-.4,39.21,39.21,0,0,0-55.42,0,1.33,1.33,0,0,1-1.9,0,1.35,1.35,0,0,1,0-1.9,41.89,41.89,0,0,1,59.22,0,1.35,1.35,0,0,1,0,1.9A1.38,1.38,0,0,1,248.66,80.4Z"
        transform="translate(-190 -65.84)"
        style={{}}
      />
      <path
        d="M241,88a1.3,1.3,0,0,1-1-.4,28.39,28.39,0,0,0-40.14,0,1.34,1.34,0,0,1-1.89-1.9,31.07,31.07,0,0,1,43.92,0,1.33,1.33,0,0,1,0,1.9A1.3,1.3,0,0,1,241,88Z"
        transform="translate(-190 -65.84)"
        style={{}}
      />
      <path
        d="M241,88a1.3,1.3,0,0,1-1-.4,28.39,28.39,0,0,0-40.14,0,1.34,1.34,0,0,1-1.89-1.9,31.07,31.07,0,0,1,43.92,0,1.33,1.33,0,0,1,0,1.9A1.3,1.3,0,0,1,241,88Z"
        transform="translate(-190 -65.84)"
        style={{}}
      />
      <path
        d="M233.37,95.68a1.37,1.37,0,0,1-1-.39,17.55,17.55,0,0,0-24.84,0,1.35,1.35,0,0,1-1.9,0,1.33,1.33,0,0,1,0-1.9,20.23,20.23,0,0,1,28.64,0,1.34,1.34,0,0,1-.95,2.29Z"
        transform="translate(-190 -65.84)"
        style={{}}
      />
    </svg>
  ),
  arrowRight: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.01 60"
    >
      <title>VectorSmartObject_2502a534-3596-40ba-8d74-806c73987cff</title>
      <polygon
        points="9.01 60 0 50.99 20.99 30 0 9.01 9.01 0 39.01 30 9.01 60"
        style={{}}
      />
    </svg>
  ),
  arrowDown: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 39.01"
    >
      <title>VectorSmartObject_d6052027-5849-4778-bf00-5cef4ec150ae</title>
      <polygon
        points="30 39.01 0 9.01 9.01 0 30 20.99 50.99 0 60 9.01 30 39.01"
        style={{}}
      />
    </svg>
  ),
  bell: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 58.26"
    >
      <title>VectorSmartObject_ed02686d-3918-42e6-aa4d-0822626ca74e</title>
      <path
        d="M601.24,193.2H588a2.18,2.18,0,0,1,0-4.35h13.22a3.92,3.92,0,0,0,0-7.83h-2.61a2.17,2.17,0,0,1-2.17-2.17V166.67a17,17,0,0,0-33.92,0v12.18a2.17,2.17,0,0,1-2.17,2.17h-2.61a3.92,3.92,0,0,0,0,7.83H571a2.18,2.18,0,0,1,0,4.35H557.76a8.27,8.27,0,0,1,0-16.53h.44v-10a21.3,21.3,0,1,1,42.6,0v10h.44a8.27,8.27,0,0,1,0,16.53Z"
        transform="translate(-549.5 -145.37)"
        style={{}}
      />
      <path
        d="M579.5,203.63a10.89,10.89,0,0,1-10.87-10.87,10.65,10.65,0,0,1,.22-2.17,2.17,2.17,0,0,1,2.13-1.74h17a2.17,2.17,0,0,1,2.13,1.74,10.65,10.65,0,0,1,.22,2.17A10.89,10.89,0,0,1,579.5,203.63ZM573,193.2a6.53,6.53,0,0,0,13,0Z"
        transform="translate(-549.5 -145.37)"
        style={{}}
      />
      <path
        d="M588,193.2H571a2.18,2.18,0,0,1,0-4.35h17a2.18,2.18,0,0,1,0,4.35Z"
        transform="translate(-549.5 -145.37)"
        style={{}}
      />
    </svg>
  ),
  share: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.02 60"
    >
      <title>VectorSmartObject_9f970651-4902-439d-988c-ae1555aedb1c</title>
      <path
        d="M760.52,37.38a2.09,2.09,0,0,1-1-3.9l15.72-9.08A2.09,2.09,0,0,1,777.28,28L761.57,37.1A2.09,2.09,0,0,1,760.52,37.38Z"
        transform="translate(-741.49 -10)"
        style={{}}
      />
      <path
        d="M776,56.38a2.09,2.09,0,0,1-1-.28L759.12,47a2.09,2.09,0,1,1,2.09-3.62l15.85,9.15a2.09,2.09,0,0,1-1,3.9Z"
        transform="translate(-741.49 -10)"
        style={{}}
      />
      <path
        d="M752.3,50.81A10.81,10.81,0,1,1,763.12,40,10.82,10.82,0,0,1,752.3,50.81Zm0-17.44A6.63,6.63,0,1,0,758.93,40,6.64,6.64,0,0,0,752.3,33.37Z"
        transform="translate(-741.49 -10)"
        style={{}}
      />
      <path
        d="M783.7,31.63a10.82,10.82,0,1,1,10.81-10.82A10.83,10.83,0,0,1,783.7,31.63Zm0-17.44a6.63,6.63,0,1,0,6.63,6.62A6.63,6.63,0,0,0,783.7,14.19Z"
        transform="translate(-741.49 -10)"
        style={{}}
      />
      <path
        d="M783.7,70a10.82,10.82,0,1,1,10.81-10.81A10.83,10.83,0,0,1,783.7,70Zm0-17.44a6.63,6.63,0,1,0,6.63,6.63A6.63,6.63,0,0,0,783.7,52.56Z"
        transform="translate(-741.49 -10)"
        style={{}}
      />
    </svg>
  ),
  trashCan: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 54.77"
    >
      <title>VectorSmartObject_3be31275-23bc-4b5f-a8ed-c6f9966922d8</title>
      <path
        d="M818.1,113.88H776.24a2.09,2.09,0,0,1-2.1-2.09V71.67a2.1,2.1,0,0,1,2.1-2.09H818.1a2.1,2.1,0,0,1,2.09,2.09v40.12A2.09,2.09,0,0,1,818.1,113.88Zm-39.77-4.18H816V73.77H778.33Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
      <path
        d="M825.07,73.77H769.26a2.09,2.09,0,0,1-2.09-2.1V66.44a2.09,2.09,0,0,1,2.09-2.09h55.81a2.1,2.1,0,0,1,2.1,2.09v5.23A2.1,2.1,0,0,1,825.07,73.77Zm-53.72-4.19H823v-1H771.35Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
      <path
        d="M801.53,68.53h-8.72a2.09,2.09,0,0,1-2.1-2.09V61.21a2.09,2.09,0,0,1,2.1-2.09h8.72a2.09,2.09,0,0,1,2.09,2.09v5.23A2.09,2.09,0,0,1,801.53,68.53Zm-6.63-4.18h4.53v-1H794.9Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
      <path
        d="M786.41,106.91a2.09,2.09,0,0,1-2.09-2.1V78.65a2.09,2.09,0,0,1,4.18,0v26.16A2.09,2.09,0,0,1,786.41,106.91Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
      <path
        d="M796.88,106.91a2.1,2.1,0,0,1-2.1-2.1V78.65a2.1,2.1,0,0,1,4.19,0v26.16A2.1,2.1,0,0,1,796.88,106.91Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
      <path
        d="M807.34,106.91a2.09,2.09,0,0,1-2.09-2.1V78.65a2.09,2.09,0,1,1,4.18,0v26.16A2.09,2.09,0,0,1,807.34,106.91Z"
        transform="translate(-767.17 -59.12)"
        style={{}}
      />
    </svg>
  ),
  close: prop => (
    <svg
      {...prop}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox={'0 0 60 60'}
      enableBackground="new 0 0 60 59.999"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g>
        <rect
          x="27.643"
          y="-10.07"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.426 30.0003)"
          width="4.714"
          height="80.138"
        />
        <rect
          x="-10.069"
          y="27.643"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.426 29.9998)"
          width="80.138"
          height="4.714"
        />
      </g>
    </svg>
  ),
  fillStar: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 57.6"
    >
      <title>VectorSmartObject_5988e1f9-9688-4c54-b175-632474c6619a</title>
      <path
        d="M653.45,161l5.66,11.47a4.13,4.13,0,0,0,3.11,2.26l12.65,1.83a4.14,4.14,0,0,1,2.29,7.05L668,192.57a4.12,4.12,0,0,0-1.18,3.65l2.16,12.6a4.13,4.13,0,0,1-6,4.35l-11.32-5.95a4.14,4.14,0,0,0-3.84,0l-11.32,5.95a4.13,4.13,0,0,1-6-4.35l2.16-12.6a4.12,4.12,0,0,0-1.18-3.65l-9.16-8.92a4.14,4.14,0,0,1,2.29-7.05l12.65-1.83a4.13,4.13,0,0,0,3.11-2.26L646.05,161A4.13,4.13,0,0,1,653.45,161Z"
        transform="translate(-619.75 -157.4)"
        style={{ fill: '#ffd44d' }}
      />
      <path
        d="M664.91,215a5.42,5.42,0,0,1-2.55-.64l-11.31-6a2.82,2.82,0,0,0-2.59,0l-11.32,6a5.47,5.47,0,0,1-7.94-5.77L631.36,196a2.76,2.76,0,0,0-.8-2.47l-9.15-8.92a5.47,5.47,0,0,1,3-9.34l12.65-1.83a2.82,2.82,0,0,0,2.1-1.53l5.65-11.46a5.48,5.48,0,0,1,9.82,0h0l5.65,11.46a2.82,2.82,0,0,0,2.1,1.53l12.65,1.83a5.47,5.47,0,0,1,3,9.34l-9.15,8.92a2.75,2.75,0,0,0-.8,2.46l2.16,12.6a5.44,5.44,0,0,1-2.18,5.36A5.5,5.5,0,0,1,664.91,215Zm-15.16-9.59a5.5,5.5,0,0,1,2.55.63L663.61,212a2.78,2.78,0,0,0,4-2.93l-2.16-12.6a5.46,5.46,0,0,1,1.57-4.84l9.16-8.93a2.7,2.7,0,0,0,.7-2.85,2.73,2.73,0,0,0-2.25-1.9L662,176.09a5.44,5.44,0,0,1-4.13-3l-5.65-11.46a2.79,2.79,0,0,0-5,0L641.6,173.1a5.44,5.44,0,0,1-4.13,3l-12.64,1.84a2.79,2.79,0,0,0-1.55,4.75l9.15,8.93a5.44,5.44,0,0,1,1.58,4.84l-2.16,12.6a2.78,2.78,0,0,0,4,2.93L647.21,206A5.43,5.43,0,0,1,649.75,205.41Z"
        transform="translate(-619.75 -157.4)"
        style={{}}
      />
    </svg>
  ),
  plus: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <title>VectorSmartObject_3cfc2ab7-99f8-44ed-8d59-fcaa3249f918</title>
      <rect x="25.71" width="8.57" height={60} style={{}} />
      <rect
        x="257.21"
        y="143.5"
        width="8.57"
        height={60}
        transform="translate(-143.5 291.5) rotate(-90)"
        style={{}}
      />
    </svg>
  ),
  search: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60.97"
    >
      <title>VectorSmartObject_7edecb23-7d49-4914-9106-933a65f08a5d</title>
      <path
        d="M69.77,114.89,60.34,104.6a28.08,28.08,0,0,0-2-37.64A28.19,28.19,0,0,0,38.51,58.8a28.06,28.06,0,0,0,0,56.12,26.84,26.84,0,0,0,3.34-.2,2.9,2.9,0,1,0-.68-5.77,22.25,22.25,0,1,1-2.68-44.34h.06a22.25,22.25,0,0,1,15.77,37.93,2.91,2.91,0,0,0,0,4.11,1.38,1.38,0,0,0,.25.17,2.78,2.78,0,0,0,.28.47l10.57,11.53a2.89,2.89,0,0,0,2.14,1,2.92,2.92,0,0,0,2.15-4.88Z"
        transform="translate(-10.53 -58.8)"
        style={{}}
      />
    </svg>
  ),
  arrowBack: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.81 18.92"
    >
      <title>VectorSmartObject_666c0cbd-365f-4ea3-865e-d2986466c7af</title>
      <rect x="1.72" y="8.46" width="19.1" height={2} />
      <path
        d="M132.05,555.76"
        transform="translate(-128.33 -546.3)"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
      <polygon points="9.57 18.92 0 9.35 9.35 0 10.76 1.41 2.83 9.35 10.98 17.5 9.57 18.92" />
    </svg>
  ),
  kakaoTalk: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 55.67"
    >
      <title>VectorSmartObject_0266760f-85e6-42c0-bc4f-7edabf18bc76</title>
      <path
        d="M203.84,161.78a2.64,2.64,0,0,1-1.79-.71,2.61,2.61,0,0,1-.67-2.68l2.28-8.5c-8-4.51-12.8-11.8-12.8-19.73,0-13.26,13.46-24.06,30-24.06s30,10.8,30,24.06-13.46,24.07-30,24.07a36.89,36.89,0,0,1-4.65-.3l-10.89,7.35A2.47,2.47,0,0,1,203.84,161.78Zm.94-2.45v0A.43.43,0,0,0,204.78,159.33Zm-1.47-.94,0,0Zm17.55-48.76c-14.6,0-26.47,9.21-26.47,20.53,0,7,4.53,13.43,12.13,17.26l1.28.64-2.38,8.9,9.93-6.71.67.1a35.13,35.13,0,0,0,4.84.35c14.59,0,26.47-9.21,26.47-20.54S235.45,109.63,220.86,109.63Z"
        transform="translate(-190.86 -106.1)"
        style={{}}
      />
      <path
        d="M210.05,126.49a1.28,1.28,0,0,0,.48-1.06,1.55,1.55,0,0,0,0-.31,1.23,1.23,0,0,0-.57-.83,2,2,0,0,0-1.08-.29h-9.4a2,2,0,0,0-1.21.38,1.24,1.24,0,0,0-.48,1.05,2.61,2.61,0,0,0,0,.31,1.26,1.26,0,0,0,.56.83,2,2,0,0,0,1.09.29h3.08v10.59a2,2,0,0,0,0,.43,1.48,1.48,0,0,0,.55.92,1.64,1.64,0,0,0,1,.34,1.57,1.57,0,0,0,1.19-.47,1.68,1.68,0,0,0,.44-1.22V126.86h3.07A1.91,1.91,0,0,0,210.05,126.49Z"
        transform="translate(-190.86 -106.1)"
        style={{}}
      />
      <path
        d="M219.34,136.36,215.42,125a1.75,1.75,0,0,0-.68-1,2,2,0,0,0-1.06-.26h-.78a1.87,1.87,0,0,0-1,.24,1.44,1.44,0,0,0-.59.8l-4.2,11.58c-.08.22-.16.46-.22.69a2,2,0,0,0-.06.95,1.38,1.38,0,0,0,.49.84,1.57,1.57,0,0,0,1,.3,1.39,1.39,0,0,0,1.47-.93l.84-2.47h5.23l.84,2.47a1.4,1.4,0,0,0,1.46.93,1.45,1.45,0,0,0,1.08-.44,1.39,1.39,0,0,0,.46-1,2.68,2.68,0,0,0-.06-.39A5.91,5.91,0,0,0,219.34,136.36Zm-8-3,1.92-6h0l1.86,6Z"
        transform="translate(-190.86 -106.1)"
        style={{}}
      />
      <path
        d="M229.94,136.31a1.9,1.9,0,0,0-1.1-.29h-5.43V125.43a1.73,1.73,0,0,0-.58-1.35,1.57,1.57,0,0,0-1-.34,1.49,1.49,0,0,0-1.18.47,1.63,1.63,0,0,0-.45,1.22v11.46a4,4,0,0,0,.08.66,1.47,1.47,0,0,0,.61,1,2.14,2.14,0,0,0,1.22.31h6.78a2,2,0,0,0,1.21-.37,1.23,1.23,0,0,0,.48-1.05,2.61,2.61,0,0,0,0-.31A1.3,1.3,0,0,0,229.94,136.31Z"
        transform="translate(-190.86 -106.1)"
        style={{}}
      />
      <path
        d="M242.15,136.16l-4-6.25,3.34-3.65a3.46,3.46,0,0,0,.39-.54,1.35,1.35,0,0,0,.15-.62.61.61,0,0,1,0-.14.91.91,0,0,0,0-.12,1.15,1.15,0,0,0-.53-.79,1.65,1.65,0,0,0-1-.31,1.27,1.27,0,0,0-.69.18,4.15,4.15,0,0,0-.62.56l-5.1,5.87v-4.92a2,2,0,0,0,0-.43,1.54,1.54,0,0,0-.55-.92,1.59,1.59,0,0,0-1-.34,1.54,1.54,0,0,0-1.19.47,1.71,1.71,0,0,0-.44,1.22v12a2,2,0,0,0,0,.43,1.48,1.48,0,0,0,.55.92,1.66,1.66,0,0,0,1,.34,1.56,1.56,0,0,0,1.19-.47,1.73,1.73,0,0,0,.45-1.22l0-3.37,1.79-1.86,3.75,6a2,2,0,0,0,.63.71,1.63,1.63,0,0,0,.82.18,1.93,1.93,0,0,0,1.17-.38,1.48,1.48,0,0,0,.49-1.25v-.11l0-.1a3.3,3.3,0,0,0-.47-.94Z"
        transform="translate(-190.86 -106.1)"
        style={{}}
      />
    </svg>
  ),
  email: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 54.23"
    >
      <title>VectorSmartObject_1fb440f9-eb0e-4d46-968a-4493dbd7143c</title>
      <path
        d="M855,205.74H801.27a1.32,1.32,0,0,1-1.33-1.33V174.85a1.31,1.31,0,0,1,.65-1.14,1.32,1.32,0,0,1,1.32,0l53.72,29.56a1.33,1.33,0,0,1-.64,2.49Zm-52.39-2.66h47.21l-47.21-26Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M855.23,205.74a1.39,1.39,0,0,1-.63-.15l-25.12-13.43a1.32,1.32,0,0,1-.71-1.21,1.35,1.35,0,0,1,.78-1.17l25.12-11.6a1.36,1.36,0,0,1,1.27.09,1.33,1.33,0,0,1,.62,1.12v25a1.33,1.33,0,0,1-.65,1.14A1.3,1.3,0,0,1,855.23,205.74Zm-22.14-14.66,20.81,11.11V181.47Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M830.1,192.32a1.37,1.37,0,0,1-.65-.17l-24.56-13.79a1.32,1.32,0,0,1-.68-1.16V156.61a5.11,5.11,0,0,1,5.1-5.1h45.52a1.33,1.33,0,1,1,0,2.66,2.45,2.45,0,0,0-2.44,2.44v24.7a1.33,1.33,0,0,1-.77,1.21l-21,9.68A1.38,1.38,0,0,1,830.1,192.32Zm-23.23-15.89,23.29,13.07,19.57-9V156.61a5.06,5.06,0,0,1,.63-2.44H809.31a2.45,2.45,0,0,0-2.44,2.44Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M858.61,157.94h-7.55a1.33,1.33,0,0,1-1.33-1.33,5.11,5.11,0,0,1,10.21,0A1.33,1.33,0,0,1,858.61,157.94Zm-5.82-2.66h4.09a2.44,2.44,0,0,0-4.09,0Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M836.39,163.19h-15.7a1.33,1.33,0,0,1,0-2.66h15.7a1.33,1.33,0,1,1,0,2.66Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M826.28,168.36H813.6a1.33,1.33,0,1,1,0-2.65h12.68a1.33,1.33,0,1,1,0,2.65Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M843.25,168.36H830.58a1.33,1.33,0,1,1,0-2.65h12.67a1.33,1.33,0,1,1,0,2.65Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
      <path
        d="M843.25,174H813.6a1.33,1.33,0,0,1,0-2.66h29.65a1.33,1.33,0,1,1,0,2.66Z"
        transform="translate(-799.94 -151.51)"
        style={{}}
      />
    </svg>
  ),
  list: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.06 60"
    >
      <title>VectorSmartObject_49655cad-5fd7-41ae-86eb-f5bf34407ef3</title>
      <path
        d="M805.26,204.07H765a7.93,7.93,0,0,1-7.92-7.92V152a7.93,7.93,0,0,1,7.92-7.93h40.22a7.93,7.93,0,0,1,7.92,7.93v44.15A7.93,7.93,0,0,1,805.26,204.07ZM765,146.82a5.18,5.18,0,0,0-5.18,5.18v44.15a5.18,5.18,0,0,0,5.18,5.18h40.22a5.18,5.18,0,0,0,5.17-5.18V152a5.18,5.18,0,0,0-5.17-5.18Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M802.14,162.14H780a1.38,1.38,0,1,1,0-2.75h22.17a1.38,1.38,0,1,1,0,2.75Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M775.6,165.86h-7.45a1.37,1.37,0,0,1-1.38-1.37V157a1.38,1.38,0,0,1,1.38-1.38h7.45A1.37,1.37,0,0,1,777,157v7.45A1.37,1.37,0,0,1,775.6,165.86Zm-6.08-2.75h4.71v-4.7h-4.71Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M802.14,175.62H780a1.38,1.38,0,1,1,0-2.75h22.17a1.38,1.38,0,1,1,0,2.75Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M775.6,179.35h-7.45a1.38,1.38,0,0,1-1.38-1.38v-7.45a1.37,1.37,0,0,1,1.38-1.37h7.45a1.37,1.37,0,0,1,1.37,1.37V178A1.37,1.37,0,0,1,775.6,179.35Zm-6.08-2.75h4.71v-4.7h-4.71Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M802.14,189.11H780a1.38,1.38,0,1,1,0-2.75h22.17a1.38,1.38,0,1,1,0,2.75Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
      <path
        d="M775.6,192.83h-7.45a1.37,1.37,0,0,1-1.38-1.37V184a1.38,1.38,0,0,1,1.38-1.38h7.45A1.37,1.37,0,0,1,777,184v7.45A1.37,1.37,0,0,1,775.6,192.83Zm-6.08-2.74h4.71v-4.71h-4.71Z"
        transform="translate(-757.12 -144.07)"
        style={{}}
      />
    </svg>
  ),
  doubleBlock: prop => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={'0 0 60 51'}
    >
      <path
        fillRule="evenodd"
        d="M-0.000,51.000 L-0.000,28.687 L60.000,28.687 L60.000,51.000 L-0.000,51.000 ZM-0.000,-0.000 L60.000,-0.000 L60.000,22.312 L-0.000,22.312 L-0.000,-0.000 Z"
      />
    </svg>
  ),
  threeBlock: prop => (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={'0 0 60 51'}
    >
      <path
        fillRule="evenodd"
        d="M47.375,51.000 L47.375,38.250 L60.000,38.250 L60.000,51.000 L47.375,51.000 ZM47.375,19.125 L60.000,19.125 L60.000,31.875 L47.375,31.875 L47.375,19.125 ZM47.375,-0.000 L60.000,-0.000 L60.000,12.750 L47.375,12.750 L47.375,-0.000 ZM-0.000,38.250 L44.312,38.250 L44.312,51.000 L-0.000,51.000 L-0.000,38.250 ZM-0.000,19.125 L44.312,19.125 L44.312,31.875 L-0.000,31.875 L-0.000,19.125 ZM-0.000,-0.000 L44.312,-0.000 L44.312,12.750 L-0.000,12.750 L-0.000,-0.000 Z"
      />
    </svg>
  ),
  question: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <title>VectorSmartObject_df5e26ff-2472-49ab-acaa-b0458ca2c1d5</title>
      <path
        d="M132,164a30,30,0,1,1,30-30A30,30,0,0,1,132,164Zm0-54.86A24.86,24.86,0,1,0,156.86,134,24.89,24.89,0,0,0,132,109.14Z"
        transform="translate(-102 -104)"
        style={{}}
      />
      <path
        d="M157.32,164a2.57,2.57,0,0,1-1.82-.75l-14.77-14.77a2.57,2.57,0,0,1,3.64-3.64l14.77,14.77a2.57,2.57,0,0,1-1.82,4.39Z"
        transform="translate(-102 -104)"
        style={{}}
      />
    </svg>
  ),
  point: prop => (
    <svg
      {...prop}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 26 26"
      style={{ background: 'new 0 0 26 26' }}
      xmlSpace="preserve"
    >
      <defs></defs>
      <circle style={{ fill: 'currentColor' }} cx={13} cy={13} r={13} />
      <g>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M8.835,6.499h4.846c0.764,0,1.427,0.097,1.991,0.291c0.564,0.194,1.03,0.463,1.4,0.808
		c0.369,0.344,0.645,0.755,0.826,1.23c0.181,0.476,0.272,0.989,0.272,1.54v0.394c0,0.551-0.097,1.068-0.291,1.549
		c-0.195,0.482-0.479,0.905-0.855,1.268c-0.376,0.364-0.842,0.651-1.4,0.864c-0.557,0.213-1.205,0.32-1.944,0.32h-2.987v5.278h-1.86
		V6.499z M10.695,8.114v5.034h2.667c1.954,0,2.93-0.808,2.93-2.423v-0.338c0-0.776-0.235-1.349-0.704-1.719
		c-0.47-0.369-1.143-0.554-2.019-0.554H10.695z"
        />
      </g>
    </svg>
  ),
  box: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 57.7"
    >
      <title>VectorSmartObject_f53783eb-83f0-4344-8b31-eafc63377804</title>
      <path
        d="M698.64,209.29a1.29,1.29,0,0,1-.54-.12l-28.3-12.56a1.33,1.33,0,0,1-.79-1.24l.42-32.52a1.33,1.33,0,0,1,.61-1.11,1.34,1.34,0,0,1,1.26-.09l28.3,12.56a1.33,1.33,0,0,1,.79,1.24L700,208a1.33,1.33,0,0,1-.61,1.11A1.34,1.34,0,0,1,698.64,209.29Zm-26.95-14.76,25.64,11.38.38-29.62-25.64-11.38Z"
        transform="translate(-669.01 -151.59)"
        style={{}}
      />
      <path
        d="M698.64,209.29a1.38,1.38,0,0,1-.75-.23,1.32,1.32,0,0,1-.58-1.12l.41-32.53a1.34,1.34,0,0,1,.83-1.21l28.61-11.83a1.34,1.34,0,0,1,1.85,1.25l-.42,32.52a1.34,1.34,0,0,1-.83,1.22l-28.61,11.83A1.49,1.49,0,0,1,698.64,209.29Zm1.74-33L700,206l25.93-10.72.38-29.62Zm26.87,19.79h0Z"
        transform="translate(-669.01 -151.59)"
        style={{}}
      />
      <path
        d="M699.06,176.77a1.25,1.25,0,0,1-.54-.12l-28.3-12.56a1.34,1.34,0,0,1,.1-2.48l28.42-9.94a1.27,1.27,0,0,1,.9,0L728,162.2a1.34,1.34,0,0,1,0,2.49l-28.44,12A1.39,1.39,0,0,1,699.06,176.77ZM674.38,163l24.69,11,24.81-10.45-24.72-9.19Z"
        transform="translate(-669.01 -151.59)"
        style={{}}
      />
      <path
        d="M711.48,170.51a1.4,1.4,0,0,1-.53-.11L684.76,159a1.33,1.33,0,0,1,1.06-2.45L712,168a1.34,1.34,0,0,1-.54,2.56Z"
        transform="translate(-669.01 -151.59)"
        style={{}}
      />
      <path
        d="M713.16,187.11a1.34,1.34,0,0,1-1.34-1.33V170.54a1.34,1.34,0,1,1,2.67,0v15.24A1.34,1.34,0,0,1,713.16,187.11Z"
        transform="translate(-669.01 -151.59)"
        style={{}}
      />
    </svg>
  ),
  historyWatch: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.97 33.5"
    >
      <title>Untitled-1</title>
      <path
        d="M292,395.79a16,16,0,1,1,1.34,6.42"
        transform="translate(-287.78 -379.04)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="20.22"
        y1="16.75"
        x2="20.22"
        y2="9.55"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="30.88"
        y1="16.75"
        x2="20.22"
        y2="16.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <polyline
        points="0.75 14.66 4.22 16.75 8.09 14.66"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  reservation: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40.98 32.59"
    >
      <title>Untitled-1</title>
      <line
        x1="0.75"
        y1={7}
        x2="27.75"
        y2={7}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <rect
        x="3.75"
        y={10}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="9.4"
        y={10}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="15.05"
        y={10}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="20.71"
        y={10}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="3.75"
        y={20}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="15.05"
        y={20}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="9.4"
        y={15}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="15.05"
        y={15}
        width="3.39"
        height="3.39"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="4.75"
        width={3}
        height={3}
        rx="0.88"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="20.75"
        width={3}
        height={3}
        rx="0.79"
        style={{ fill: 'currentColor' }}
      />
      <path
        d="M199.57,459.72v-7.85h-27v23h18.69"
        transform="translate(-171.82 -448.87)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <path
        d="M194.3,474.87a9.19,9.19,0,1,0,10.27-12.39"
        transform="translate(-171.82 -448.87)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <path
        d="M204.57,462.48a9.74,9.74,0,0,0-1.72-.16,9.18,9.18,0,0,0-8.55,12.55"
        transform="translate(-171.82 -448.87)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="31.03"
        y1="22.64"
        x2="31.03"
        y2="19.2"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="36.78"
        y1="22.64"
        x2="31.03"
        y2="22.64"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="31.03"
        y1="13.45"
        x2="31.03"
        y2="14.6"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="21.83"
        y1="22.64"
        x2="22.98"
        y2="22.64"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="31.03"
        y1="31.84"
        x2="31.03"
        y2="30.69"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="40.23"
        y1="22.64"
        x2="39.08"
        y2="22.64"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
  circleRightArrow: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <title>VectorSmartObject_8848228b-6b22-46a0-a2a3-e6c39d09abcf</title>
      <path
        d="M359.75,523.5A28.5,28.5,0,1,1,331.26,552,28.5,28.5,0,0,1,359.75,523.5Z"
        transform="translate(-329.75 -521.99)"
        style={{ fill: '#fff', fillRule: 'evenodd' }}
      />
      <path
        d="M359.75,582a30,30,0,1,1,30-30A30,30,0,0,1,359.75,582Zm0-57a27,27,0,1,0,27,27A27,27,0,0,0,359.75,525Z"
        transform="translate(-329.75 -521.99)"
        style={{ fill: '#f26e7d' }}
      />
      <polygon
        points="27.08 40.63 23.89 37.44 31.32 30 23.89 22.56 27.08 19.37 37.71 30 27.08 40.63"
        style={{ fill: '#f26e7d' }}
      />
    </svg>
  ),
  naver: prop => (
    <svg
      {...prop}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 57.323 57.325"
      enableBackground="new 0 0 57.323 57.325"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g>
        <g>
          <path
            style={{ fill: '#4AB749' }}
            d="M1.194,0.064C2.096-0.053,3.011,0.03,3.919,0.011C21.071,0.014,38.223,0.02,55.373,0.008
			c0.526-0.027,1.093,0.068,1.453,0.487c0.691,0.687,0.445,1.727,0.49,2.597c-0.019,17.522,0.006,35.042-0.012,52.56
			c0.034,1.002-0.959,1.806-1.935,1.655c-17.895,0-35.793,0.009-53.691-0.003c-0.895,0.048-1.736-0.74-1.674-1.649
			c-0.003-17.995,0-35.989,0-53.98C-0.053,0.934,0.486,0.253,1.194,0.064z M12.947,14.31c0.022,9.561,0.007,19.123,0.007,28.684
			c3.581,0.021,7.166,0.015,10.745,0.003c0.054-4.74-0.066-9.485,0.063-14.225c1.175,1.641,2.247,3.354,3.446,4.979
			c2.005,3.113,4.274,6.055,6.201,9.216c3.606,0.095,7.211-0.003,10.818,0.055c0.038-0.449,0.077-0.896,0.077-1.347
			c-0.053-9.125,0.043-18.252-0.049-27.376c-3.567-0.028-7.131,0.007-10.696-0.014c-0.027,4.766,0.028,9.536-0.031,14.298
			c-3.313-4.713-6.444-9.566-9.834-14.22C20.122,14.202,16.528,14.315,12.947,14.31z"
          />
        </g>
      </g>
    </svg>
  ),
  file: prop => (
    <svg
      {...prop}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.06 33.5"
    >
      <title>Untitled-1</title>
      <polygon
        points="0.75 0.75 0.75 8.27 8.27 0.75 0.75 0.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <polygon
        points="8.27 0.75 0.75 8.27 0.75 32.75 30.31 32.75 30.31 0.75 8.27 0.75"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="6.38"
        y1="8.27"
        x2="19.03"
        y2="8.27"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="6.38"
        y1="20.81"
        x2="19.03"
        y2="20.81"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="6.38"
        y1="14.54"
        x2="24.54"
        y2="14.54"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
      <line
        x1="6.38"
        y1="27.07"
        x2="24.54"
        y2="27.07"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.5px',
        }}
      />
    </svg>
  ),
};

export interface IconConifgProps {
  viwBox?: string;
  label?: string;
  labelSize?: 'large' | 'small';
  size?: IconSize;
  hover?: boolean;
  color?: JDColor;
  tooltip?: string;
  selected?: boolean;
  badge?: string;
  mode?: "circle" | "circleBorder" | "circleShdow"
}
