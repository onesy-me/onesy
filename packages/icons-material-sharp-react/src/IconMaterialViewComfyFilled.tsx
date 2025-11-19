import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewComfyFilled'

      short_name='ViewComfy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-520v-280h800v280H80Zm320 360v-280h480v280H400Zm-320 0v-280h240v280H80Z"/>
    </Icon>
  );
};

IconMaterialViewComfyFilled.displayName = 'OnesyIconMaterialViewComfyFilled';

export default IconMaterialViewComfyFilled;
