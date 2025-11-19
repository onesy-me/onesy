import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepeatOne = (props: IIcon) => {

  return (
    <Icon
      name='RepeatOne'

      short_name='RepeatOne'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-360v-180h-60v-60h120v240h-60ZM280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/>
    </Icon>
  );
};

IconMaterialRepeatOne.displayName = 'OnesyIconMaterialRepeatOne';

export default IconMaterialRepeatOne;
