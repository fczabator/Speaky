import * as React from 'react';
import {
  Box,
  Heading,
  Button,
  Layer,
  ResponsiveContext,
  Collapsible
} from 'grommet';
import { FormClose } from 'grommet-icons';
import { AppBar } from './AppBar';

export const AppLayout: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!isOpen);

  return (
    <>
      <AppBar onSidebarOpen={handleOpen} />
      <ResponsiveContext.Consumer>
        {size => (
          <>
            {!isOpen || size !== 'small' ? (
              <Collapsible direction="horizontal" open={isOpen}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  elevation="small"
                  align="center"
                  justify="center"
                >
                  sidebar
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background="light-2"
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button icon={<FormClose />} onClick={handleOpen} />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  sidebar
                </Box>
              </Layer>
            )}
          </>
        )}
      </ResponsiveContext.Consumer>
    </>
  );
};
