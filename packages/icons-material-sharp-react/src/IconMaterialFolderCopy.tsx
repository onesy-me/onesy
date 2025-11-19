import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFolderCopy = (props: IIcon) => {

  return (
    <Icon
      name='FolderCopy'

      short_name='FolderCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-600h80v520h680v80H40Zm160-160v-600h280l80 80h360v520H200Zm80-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z"/>
    </Icon>
  );
};

IconMaterialFolderCopy.displayName = 'OnesyIconMaterialFolderCopy';

export default IconMaterialFolderCopy;
