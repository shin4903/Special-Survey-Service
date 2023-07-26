import styeld, {css} from 'styled-components'

const StyledInput = styeld.input.attrs<any>((props) => ({
    value : props.value || undefined,
    placeholder : props.placeholder || null
}))`
    ${(props) => {
        const inputState = props.inputstate
        return css`
            padding-left: 10px;
            width: 100%;
            height: 100%;
            border: 1px solid black;
            background-color: white;
            border: 1px solid ${(() => (inputState ? "black" : "red"))};
        `
    }}
`

export {StyledInput}