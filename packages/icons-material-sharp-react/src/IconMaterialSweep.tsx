import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSweep = (props: IIcon) => {

  return (
    <Icon
      name='Sweep'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240v-80h240v80H400Zm-158 0L15-467l57-57 170 170 366-366 57 57-423 423Zm318-160v-80h240v80H560Zm160-160v-80h240v80H720Z"/>
    </Icon>
  );
};

IconMaterialSweep.displayName = 'OnesyIconMaterialSweep';

export default IconMaterialSweep;
