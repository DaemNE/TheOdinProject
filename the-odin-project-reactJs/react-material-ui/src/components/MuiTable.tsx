import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Olivia",
    last_name: "Longega",
    email: "olongega0@nih.gov",
    gender: "Female",
    ip_address: "75.128.214.4",
  },
  {
    id: 2,
    first_name: "Tim",
    last_name: "Roskelley",
    email: "troskelley1@liveinternet.ru",
    gender: "Female",
    ip_address: "67.12.76.160",
  },
  {
    id: 3,
    first_name: "Janie",
    last_name: "McFade",
    email: "jmcfade2@qq.com",
    gender: "Female",
    ip_address: "99.176.237.197",
  },
  {
    id: 4,
    first_name: "Raychel",
    last_name: "Shurman",
    email: "rshurman3@huffingtonpost.com",
    gender: "Female",
    ip_address: "23.172.148.217",
  },
  {
    id: 5,
    first_name: "Nike",
    last_name: "Tour",
    email: "ntour4@miibeian.gov.cn",
    gender: "Female",
    ip_address: "223.197.82.214",
  },
  {
    id: 6,
    first_name: "Babbette",
    last_name: "Osman",
    email: "bosman5@zimbio.com",
    gender: "Female",
    ip_address: "51.142.219.157",
  },
  {
    id: 7,
    first_name: "Abe",
    last_name: "Spray",
    email: "aspray6@networksolutions.com",
    gender: "Bigender",
    ip_address: "125.189.85.158",
  },
  {
    id: 8,
    first_name: "Dottie",
    last_name: "Diben",
    email: "ddiben7@exblog.jp",
    gender: "Female",
    ip_address: "177.2.104.217",
  },
  {
    id: 9,
    first_name: "Gearard",
    last_name: "Sotham",
    email: "gsotham8@w3.org",
    gender: "Male",
    ip_address: "175.211.222.209",
  },
  {
    id: 10,
    first_name: "Westleigh",
    last_name: "Debling",
    email: "wdebling9@hhs.gov",
    gender: "Bigender",
    ip_address: "194.74.118.253",
  },
];
