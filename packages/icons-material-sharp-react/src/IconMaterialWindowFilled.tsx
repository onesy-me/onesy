import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowFilled = (props: IIcon) => {

  return (
    <Icon
      name='WindowFilled'

      short_name='Window'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-440h320v320H520v-320Zm0-80v-320h320v320H520Zm-80 0H120v-320h320v320Zm0 80v320H120v-320h320Z"/>
    </Icon>
  );
};

IconMaterialWindowFilled.displayName = 'OnesyIconMaterialWindowFilled';

export default IconMaterialWindowFilled;
