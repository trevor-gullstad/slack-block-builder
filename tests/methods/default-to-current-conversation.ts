import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const defaultToCurrentConversation = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.defaultToCurrentConversation,
    methodName: Prop.DefaultToCurrentConversation,
    propSetterPropName: Prop.DefaultToCurrentConversation,
    slackDtoParamName: SlackDto.mapParam(Prop.DefaultToCurrentConversation),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
