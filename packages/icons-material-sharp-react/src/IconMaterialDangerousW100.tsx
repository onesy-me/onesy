import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDangerousW100 = (props: IIcon) => {

  return (
    <Icon
      name='DangerousW100'

      short_name='Dangerous'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-172 172-352v-256l180-180h256l180 180v256L608-172H352Zm14-174 114-114 114 114 20-20-114-114 114-114-20-20-114 114-114-114-20 20 114 114-114 114 20 20Zm-2 146h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/>
    </Icon>
  );
};

IconMaterialDangerousW100.displayName = 'OnesyIconMaterialDangerousW100';

export default IconMaterialDangerousW100;
