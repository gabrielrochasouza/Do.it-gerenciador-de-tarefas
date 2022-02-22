import { StyledBtn } from "./style"


export default function Button({children,...rest}){

    return (
        <StyledBtn {...rest} >
            {children}
        </StyledBtn>
    )

}