import { StarBorder, Star } from "@mui/icons-material";
import { Checkbox, Typography, Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from '../routes/routes';
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Wrapper = styled(Box) ({
    padding: '0 0 0 10px',
    background: '#f2f6fc',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& > div' : {
        display: 'flex',
        width: '100%',
        '& > div > p': {
            fontSize: 14,
        }
    }
});

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})

const Email = ({ email, selectedEmails, setRefreshScreen, setSelectedEmails }) => {

    const navigate = useNavigate();

    const toggleStarredEmailService = useApi(API_URLS.toggleStarredMails);

    const toggleStarredEmail = () => {
        toggleStarredEmailService.call({ id: email._id, value: !email.starred });
        setRefreshScreen(prevState => !prevState);
    }

    const onValueChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        }
    }

    return (
        <Wrapper>
            <Checkbox 
                size="small" 
                checked={selectedEmails.includes(email._id)}
                onChange={() => onValueChange()}
            />
            {
                email.starred ? 
                <Star fontSize="small" style={{ marginRight: 10, color: '#FFF200' }} onClick={() => toggleStarredEmail()} />
            : 
                <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredEmail()} /> 
            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: 'hidden' }}>{email.name}</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}&nbsp;
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
                </Date>
            </Box>
        </Wrapper>
    )
    
}

export default Email;