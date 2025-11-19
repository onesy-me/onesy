import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChurchFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChurchFilled'

      short_name='Church'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-320l160-71v-129l200-100v-60h-80v-80h80v-80h80v80h80v80h-80v60l200 100v129l160 71v320H560v-200H400v200H80Zm400-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Z"/>
    </Icon>
  );
};

IconMaterialChurchFilled.displayName = 'OnesyIconMaterialChurchFilled';

export default IconMaterialChurchFilled;
