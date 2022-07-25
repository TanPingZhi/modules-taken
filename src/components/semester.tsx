import * as React from 'react';
import {Box, Link, Typography} from "@mui/material";

export interface Module {
    moduleCode: string,
    moduleName: string,
    website: string
}

export const Semester = ({name, modules}: { name: string, modules: Module[] }) => {
    return (
        <>
            <Box sx={{width: '100%', maxWidth: 500, m: 1}}>
                <Typography variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                {modules.map(
                    mod => <>
                        <Typography variant='body1' gutterBottom>
                            {mod.moduleCode + " "}
                            {mod.website === "" ? mod.moduleName :
                                <Link href={mod.website} underline="none">{mod.moduleName}</Link>}
                        </Typography>
                    </>
                )}
            </Box>
        </>
    );
}
