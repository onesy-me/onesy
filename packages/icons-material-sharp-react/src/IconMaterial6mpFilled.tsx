import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial6mpFilled = (props: IIcon) => {

  return (
    <Icon
      name='6mpFilled'

      short_name='6mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-500h180v-140H460v-40h120v-60H400v240Zm60-40v-60h60v60h-60ZM240-220h60v-180h40v120h60v-120h40v180h60v-240H240v240Zm300 0h60v-60h120v-180H540v240Zm60-120v-60h60v60h-60ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterial6mpFilled.displayName = 'OnesyIconMaterial6mpFilled';

export default IconMaterial6mpFilled;
