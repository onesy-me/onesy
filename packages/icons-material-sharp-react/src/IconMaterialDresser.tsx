import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDresser = (props: IIcon) => {

  return (
    <Icon
      name='Dresser'

      short_name='Dresser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-640q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v640h-80v-80H240v80h-80Zm80-400h200v-240H240v240Zm280-160h200v-80H520v80Zm0 160h200v-80H520v80ZM400-320h160v-80H400v80ZM240-440v160h480v-160H240Zm0 0v160-160Z"/>
    </Icon>
  );
};

IconMaterialDresser.displayName = 'OnesyIconMaterialDresser';

export default IconMaterialDresser;
