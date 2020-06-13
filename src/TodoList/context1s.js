import React from 'react';
// ThemeContext 这个名字可以随便取
// light 这个参数是如果没有在外部找到Provider 就会用这个参数，如果外部有了就会用Provider 里的value
export const ThemeContext = React.createContext('light');