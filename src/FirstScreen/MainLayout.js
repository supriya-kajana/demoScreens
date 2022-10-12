import PrimaryButton from "../CommonComponents/PrimaryButton";
import SearchBar from "../CommonComponents/SearchBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GroupGrid from "./GroupGrid";

export default function MainLayout(){
    return(
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
             <div className='searchWrapperDiv'>
             <SearchBar />
             <PrimaryButton />
             </div>
             <GroupGrid />

            </CardContent>
        </Card>
        );
}