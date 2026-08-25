# 19. Plans and usage

Cursor is **free to start with**. There is a cap on how much you can use, though, and what happens past that cap depends on your plan. This chapter exists so you can judge one thing: will today's exercises actually run?

> **Prices and allowances change.** The figures here were **checked against the official pages in August 2026**.
> Before deciding anything, open the [official pricing page](https://cursor.com/pricing).

## The plans

| Plan | Where it sits |
|------|---------------|
| **Hobby** | Free. No credit card required |
| **Pro** | The standard individual plan |
| **Pro+** | A larger Agent allowance than Pro |
| **Ultra** | The largest individual allowance |
| **Teams**（Standard / Premium） | Adds team administration, shared context and usage analytics |
| **Enterprise** | Custom quote. Pooled usage, invoice billing, SCIM, access controls |

> There is also a region-limited plan called **Start**, for India.

## What you get on the free（Hobby）plan

The official wording:

> The Hobby plan gives you access to Cursor's core features with limited usage. You can use Agent, Chat, and Tab completions with the Auto model.

So **Agent, Chat and Tab completions are all available for free**. The limit is on the usage side.

**Note the phrase “with the Auto model”.** Whether the free plan lets you pick a specific model by hand is **not stated in the official documentation**. Until that is verified on a real machine, this course treats the free plan as “Auto only”.

> Not yet verified on a real machine. Don't state it as fact.

## How usage works

> Every plan includes a set amount of model usage. On-demand usage allows you to continue using models after your included amount is consumed, billed in arrears.

**Every plan includes some amount of usage, and once it's consumed you can keep going on demand.** That part is billed afterwards.

On paid plans the allowance is split into two pools.

| Pool | Contents |
|------|----------|
| **Cursor Models** | Models Cursor provides itself |
| **Other Models** | Third-party models, charged at API rates |

When you run out, the options are **add on-demand usage** or **upgrade the plan**.

## How Auto relates to cost

[01-modes.md](01-modes.md) explained that Auto is the Cursor Router picking a model for you. On the cost side:

> All Auto modes bill at the list price of the model each request is routed to.

**Even on Auto, you're billed at the price of whichever model the request was routed to.** Auto is not a mechanism for being cheaper. Auto's three policies（Cost / Balance / Intelligence）change which model it routes to.

## Taking this course

| Situation | Judgement |
|-----------|-----------|
| Session 1（basics） | Expected to work on the free plan. Only a handful of Agent requests |
| Session 2（fixing the model） | **Careful here.** Chapter 2 asks everyone to move off Auto to a specific model. Whether the free plan can do this is unverified |
| Sessions 3 and 4（team work） | Requests multiply by headcount. Some people may exhaust their allowance |

**Before session 2, the instructor should check on their own machine whether the free plan can fix a model.** If it can't, drop “fix the model” from the required steps in chapter 2 and switch to having **everyone stay on Auto**（the comparison conditions still match).

## Watch out for

- **Don't copy prices into other parts of this material.** When they change you'll miss one. Keep it to this chapter and the official page
- If you're taking the course on a company account, the plan is set by an administrator. You may not be able to upgrade yourself

Reference: [Pricing](https://cursor.com/pricing) · [Plans（Help）](https://cursor.com/help/account-and-billing/pricing) · [Models & Pricing](https://cursor.com/docs/models-and-pricing)

Back to: [00-map.md](00-map.md)
