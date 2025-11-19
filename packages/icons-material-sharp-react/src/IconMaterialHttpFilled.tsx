import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHttpFilled = (props: IIcon) => {

  return (
    <Icon
      name='HttpFilled'

      short_name='Http'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-360v-240h60v80h80v-80h60v240h-60v-100h-80v100H40Zm300 0v-180h-60v-60h180v60h-60v180h-60Zm220 0v-180h-60v-60h180v60h-60v180h-60Zm160 0v-240h200v160H780v80h-60Zm60-140h80v-40h-80v40Z"/>
    </Icon>
  );
};

IconMaterialHttpFilled.displayName = 'OnesyIconMaterialHttpFilled';

export default IconMaterialHttpFilled;
