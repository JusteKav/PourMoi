import { useTheme, Divider } from '@mui/material';
import ColorsEdit from './data-edit-page-colors-edit';
import TypesEdit from './data-edit-page-types-edit';
import MaterialsEdit from './data-edit-page-materials-edit';
import StonesEdit from './data-edit-page-stones-edit';
import AlignmentContainer from '../../../../components/partials/containers/alignment-container';

const DataEditPage = () => {
  const theme = useTheme();

  return (
    <AlignmentContainer
      sx={{
        minHeight: `calc(100vh - ${theme.mixins.footer.height}  - ${theme.mixins.navbar.height}) `,
        flexWrap: 'wrap',
      }}
    >
      <ColorsEdit />
      <Divider sx={{ width: '100%' }} />
      <MaterialsEdit />
      <Divider sx={{ width: '100%' }} />
      <TypesEdit />
      <Divider sx={{ width: '100%' }} />
      <StonesEdit />
    </AlignmentContainer>
  );
};

export default DataEditPage;
