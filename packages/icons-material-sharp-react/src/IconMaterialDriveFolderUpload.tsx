import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDriveFolderUpload = (props: IIcon) => {

  return (
    <Icon
      name='DriveFolderUpload'

      short_name='DriveFolderUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialDriveFolderUpload.displayName = 'OnesyIconMaterialDriveFolderUpload';

export default IconMaterialDriveFolderUpload;
