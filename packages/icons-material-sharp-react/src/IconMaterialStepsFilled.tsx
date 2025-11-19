import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepsFilled = (props: IIcon) => {

  return (
    <Icon
      name='StepsFilled'

      short_name='Steps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-80 296-580H76l232-311 132 66v131l147-35 88 267 205 205-30 177h-30Zm-315 0L43-500h222L703-80H505Z"/>
    </Icon>
  );
};

IconMaterialStepsFilled.displayName = 'OnesyIconMaterialStepsFilled';

export default IconMaterialStepsFilled;
