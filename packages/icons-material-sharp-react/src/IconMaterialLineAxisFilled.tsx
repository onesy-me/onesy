import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineAxisFilled = (props: IIcon) => {

  return (
    <Icon
      name='LineAxisFilled'

      short_name='LineAxis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m140-200-60-60 300-300 160 160 67-76-224-207-243 243-60-60 300-300 284 261 160-181 56 56-158 178 158 146-60 60-154-142-126 142-160-160-240 240Z"/>
    </Icon>
  );
};

IconMaterialLineAxisFilled.displayName = 'OnesyIconMaterialLineAxisFilled';

export default IconMaterialLineAxisFilled;
