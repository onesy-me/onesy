import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial50mpFilled = (props: IIcon) => {

  return (
    <Icon
      name='50mpFilled'

      short_name='50mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-500h180v-240H500v240Zm60-60v-120h60v120h-60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Zm140-380h180v-140H320v-40h120v-60H260v140h120v40H260v60Z"/>
    </Icon>
  );
};

IconMaterial50mpFilled.displayName = 'OnesyIconMaterial50mpFilled';

export default IconMaterial50mpFilled;
