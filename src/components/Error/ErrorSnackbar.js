import {useRecoilState} from 'recoil';
import {errorAtom} from '../../state/recoilState';
import {IconButton, Snackbar, Stack} from "@mui/material";
import {Alert} from "@mui/lab";
import CloseIcon from '@mui/icons-material/Close';

let lastSetError, lastError;

export function throwError(e) {
    lastSetError(e)
}

export function ErrorSnackbar(props) {
    const [error, setError] = useRecoilState(errorAtom);

    lastSetError = setError;
    lastError = error;

    const closeError = () => {
        setError(null)
    }
    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeError}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return <>
        {props.children}
        <Snackbar open={!!error} onClose={closeError} autoHideDuration={5000}>
            <Alert severity="error" action={action}>{error}</Alert>
        </Snackbar>
    </>
}