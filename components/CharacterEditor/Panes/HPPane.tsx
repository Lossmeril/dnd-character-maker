import { EditorPane } from './EditorPane';
import PaneCard from './PaneCard';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const HPPane: EditorPane = ({ character }) => {
  return (
    <PaneCard title='Zdraví'>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Povolání</Th>
              <Th>Level</Th>
              <Th>Level Base</Th>
              <Th>CON Modifier</Th>
              <Th>Level Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </PaneCard>
  );
};

export default HPPane;
