import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapFilled = (props: IIcon) => {

  return (
    <Icon
      name='MapFilled'

      short_name='Map'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-120-240-84-240 93v-647l240-82 240 84 240-93v647l-240 82Zm-40-98v-468l-160-56v468l160 56Z"/>
    </Icon>
  );
};

IconMaterialMapFilled.displayName = 'OnesyIconMaterialMapFilled';

export default IconMaterialMapFilled;
