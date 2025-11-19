import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAs = (props: IIcon) => {

  return (
    <Icon
      name='SaveAs'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h560l160 160v86l-80 79v-132L647-760H200v560h240v80H120Zm80-640v560-560ZM520-40v-123l263-262 123 122L643-40H520Zm300-263-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM240-560h360v-160H240v160Zm240 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
};

IconMaterialSaveAs.displayName = 'OnesyIconMaterialSaveAs';

export default IconMaterialSaveAs;
