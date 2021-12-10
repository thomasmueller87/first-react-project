import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
    --primary: white;
    --primary-background: rgb(152, 192, 242);
}

body {
    margin: 0;
    background-color: var(--primary-background)
}
`