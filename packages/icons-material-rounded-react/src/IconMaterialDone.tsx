import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDone = (props: IIcon) => {

  return (
    <Icon
      name='Done'

      short_name='Done'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m382-354 339-339q12-12 28-12t28 12q12 12 12 28.5T777-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"/>
    </Icon>
  );
};

IconMaterialDone.displayName = 'OnesyIconMaterialDone';

export default IconMaterialDone;
