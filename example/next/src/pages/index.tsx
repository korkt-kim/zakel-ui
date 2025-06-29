import { Box, Button  } from "@zakel-ui/core";

export default function Home() {
  return (
    <div>
      <Box>qwer</Box>
      <Button>asdf</Button>
      <Button 
        fontSize="fontSizes.x" 
        color="colors.blue" 
        bg="colors.green" 
        onClick={() => alert("Qwe")}
      >
        asdf
      </Button>
    </div>
  );
}
