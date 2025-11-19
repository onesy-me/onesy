import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatW100 = (props: IIcon) => {

  return (
    <Icon
      name='RepeatW100'

      short_name='Repeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-132 172-256l124-124 20 20-90 90h470v-160h28v188H226l90 90-20 20Zm-60-398v-188h498l-90-90 20-20 124 124-124 124-20-20 90-90H264v160h-28Z"/>
    </Icon>
  );
};

IconMaterialRepeatW100.displayName = 'OnesyIconMaterialRepeatW100';

export default IconMaterialRepeatW100;
